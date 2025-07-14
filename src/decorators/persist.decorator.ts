import { LocalStorage } from 'node-localstorage'

/**
 * Handle creation of localStorage if needed (in NodeJS).
 */
if(!globalThis?.localStorage)
  globalThis.localStorage = new LocalStorage('./temp')
const store = globalThis.localStorage

/**
 * Accessor Decorator to persist the property to local storage.
 * 
 * @param target 
 * @param propertyKey 
 * @param descriptor 
 */
export function Persist(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const _key = `${target.constructor.name}/Persist/${propertyKey}`

  const originalGetter = descriptor.get
  descriptor.get = function () {
    return originalGetter.call(this) ?? store.getItem(_key)
  }

  const originalSetter = descriptor.set
  descriptor.set = function(value: any) {
    store.setItem(_key, value)
    originalSetter.call(this, value)
  }
}
