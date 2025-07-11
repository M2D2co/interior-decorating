/**
 * Method decorator that reports the elapsed time of a function to the console.
 * 
 * @param target the object instance containing the decorated method -- allows modifying the object
 * @param methodName the name of the decorated method
 * @param descriptor the config object of the decorated method or property - allows modifying the method
 */
export function PerfLog(target: any, methodName: string, descriptor: TypedPropertyDescriptor<any>) {
  const key = `${target.constructor.name}_${methodName}_${Date.now()}`

  const originalMethod = descriptor.value

  descriptor.value = function(...args: any[]) {
    console.time(key)
    const retVal = originalMethod.apply(this, ...args)
    if(retVal && typeof (retVal as PromiseLike<any>).then ===  'function') {
      (retVal as PromiseLike<any>).then(value => {
        console.timeEnd(key)
        return value
      })
    }
    console.timeEnd(key)
    return retVal
  }
}
