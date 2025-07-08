/**
 * Decorator Factory to produce a configured Method Decorator which tests parameters
 * for `null`. Can be configured to pass through null if _any_ parameters are `null`
 * or if _all_ paramters are `null`.
 * 
 * @param match match type (defaults to `all`)
 * @returns the Method Decorator
 */
export function PassNull(match: 'any' | 'all' = 'all'): MethodDecorator {
  /**
   * @param target the object instance containing the decorated method -- allows modifying the object
   * @param methodName the name of the decorated method
   * @param descriptor the config object of the decorated method or property - allows modifying the method
   */
  return (target: any, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    const originalMethod = descriptor.value

    descriptor.value = function(...args: any[]) {
      switch(match) {
        case 'all':
          if(args?.length && args.every(arg => arg === null)) return null
          break
        case 'any':
          if(args?.length && args.some(arg => arg === null)) return null
          break
      }

      return originalMethod.apply(this, args)
    }
  }
}
