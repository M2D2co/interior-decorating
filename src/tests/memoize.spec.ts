import { memo } from "../decorators/memoize.decorator"
import { TestMemoize } from "../examples/memoize"

describe('Memoize Method Decorator', () => {
  let example: TestMemoize

  beforeEach(() => {
    example = new TestMemoize()
    // Reset the memo
    Object.keys(memo).forEach(k => memo[k] = null)
  })

  describe('called with zero params', () => {
    it('passes through on the first call', () => {
      expect(example.zeroParams()).toBe(1)
    })

    it('always returns the same value', () => {
      expect(example.zeroParams()).toBe(1)
      expect(example.zeroParams()).toBe(1)
      expect(example.zeroParams()).toBe(1)
    })

    it('does not do work after the first call', () => {
      spyOn(example, 'getStuff')
      expect(example.zeroParams()).toBe(1)
      expect(example.getStuff).toHaveBeenCalledTimes(1)
      expect(example.zeroParams()).toBe(1)
      expect(example.getStuff).toHaveBeenCalledTimes(1)
    })
  })

  describe('called with one param', () => {
    it('passes through on the first call', () => {
      expect(example.oneParam('foo')).toBe('onefoo')
    })

    it('populates the cache with the first call', () => {
      expect(example.oneParam('foo77')).toBe('onefoo77')
      expect(memo['TestMemoize_oneParam_foo77']).toBe('onefoo77')
    })

    it('returns from the cache on the second call', () => {
      expect(example.oneParam('foo77')).toBe('onefoo77')
      memo['TestMemoize_oneParam_foo77'] = 'barf22'
      expect(example.oneParam('foo77')).toBe('barf22')
    })
  })

  describe('called with two params', () => {
    it('passes through on the first call', () => {
      expect(example.twoParams(15, 'fifteen')).toBe('two15fifteen')
    })

    it('populates the cache with the first call', () => {
      expect(example.twoParams(15, 'fifteen')).toBe('two15fifteen')
      expect(memo['TestMemoize_twoParams_15_fifteen']).toBe('two15fifteen')
    })
  })

  describe('calling objParams', () => {
    it('receives the same exact object every time', () => {
      const result1 = example.objParams(17, 'stuff')
      const result2 = example.objParams(17, 'stuff')
      expect(result2).toEqual(result1)
      expect(result2).toBe(result1)
    })
  })

})
