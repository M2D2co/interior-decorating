export function Persist(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const _key = `${target.constructor.name}/Persist/${propertyKey}`

  const originalGetter = descriptor.get
  descriptor.get = function () {
    const prop = originalGetter.call(this)
    return !prop ? global.localStorage.getItem(_key) : prop
  }

  const originalSetter = descriptor.set
  descriptor.set = function(value: any) {
    global.localStorage.setItem(_key, value)
    originalSetter.call(this, value)
  }
}
