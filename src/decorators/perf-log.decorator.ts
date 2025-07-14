/**
 * Method decorator that reports the elapsed time of a function to the console.
 * 
 * @param target the object instance containing the decorated method -- allows modifying the object
 * @param methodName the name of the decorated method
 * @param descriptor the config object of the decorated method or property - allows modifying the method
 */
export function PerfLog(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value

  descriptor.value = function(...args: any[]) {
    const _key = `${target.constructor.name}_${methodName}_${globalThis.performance.now()}`
    console.time(_key)
    const retVal = originalMethod.apply(this, ...args)
    if(retVal && typeof (retVal as PromiseLike<any>).then ===  'function') {
      return (retVal as PromiseLike<any>).then(value => {
        console.timeEnd(_key)
        return value
      })
    }
    console.timeEnd(_key)
    return retVal
  }
}
