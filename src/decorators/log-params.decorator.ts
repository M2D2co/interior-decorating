/**
 * Decorator Factory to produce a configured Method Decorator which logs parameters.
 * 
 * @param level logging level (defaults to `debug`)
 * @returns the Method Decorator
 */
export function LogParams(level: 'debug' | 'info' | 'warn' | 'error' = 'debug'): MethodDecorator {
  /**
   * @param target the object instance containing the decorated method -- allows modifying the object
   * @param methodName the name of the decorated method
   * @param descriptor the config object of the decorated method or property - allows modifying the method
   */
  return (target: any, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    const originalMethod = descriptor.value
    
    descriptor.value = function(...args: any[]) {
      if(args.length) console[level](`${methodName} Params`, ...args)
      else console[level](`${methodName} Params void`)

      return originalMethod.apply(this, args)
    }
  }
}
