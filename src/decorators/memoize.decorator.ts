// Exported for testing purposes
export const memo: { [key: string]: any } = {}

/**
 * Implements Memoization as a Method Decorator.
 * 
 * @param target the object instance containing the decorated method -- allows modifying the object
 * @param methodName the name of the decorated method
 * @param descriptor the config object of the decorated method or property - allows modifying the method
 */
export function Memoize(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value
  // const memo: { [key: string]: any } = {} // This is the correct way to build a closure-scoped memo
  descriptor.value = function(...args: any[]) {
    const _key = [target.constructor.name, methodName, ...args].map(o => o.toString()).join('_')
    return memo[_key] ?? ( memo[_key] = originalMethod.apply(this, args) )
  }
}
