import { LocalStorage } from 'node-localstorage'

if(!globalThis?.localStorage)
  globalThis.localStorage = new LocalStorage('./temp')
const store = globalThis.localStorage

export function Persist(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const _key = `${target.constructor.name}/Persist/${propertyKey}`

  const originalGetter = descriptor.get
  descriptor.get = function () {
    const prop = originalGetter.call(this)
    return !prop ? store.getItem(_key) : prop
  }

  const originalSetter = descriptor.set
  descriptor.set = function(value: any) {
    store.setItem(_key, value)
    originalSetter.call(this, value)
  }
}
