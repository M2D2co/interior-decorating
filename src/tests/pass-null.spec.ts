import { TestPassNull } from "../examples/pass-null"


describe('TestPass Method Decorator', () => {
  let example: TestPassNull

  beforeEach(() => {
    example = new TestPassNull()
  })

  describe('configured with all', () => {

    it('does nothing on zero-param function', () => {
      expect(example.zeroParams()).toEqual('ok')
    })

    it('does nothing on non-null param', () => {
      expect(example.oneParam('foo')).toEqual('okfoo')
    })

    it('returns null on null param', () => {
      expect(example.oneParam(null)).toBeNull()
    })

    it('does nothing if just the first param is null', () => {
      expect(example.twoParamsAll(null, 'foo')).toEqual('ok')
    })

    it('does nothing if just the second param is null', () => {
      expect(example.twoParamsAll(12, null)).toEqual('ok')
    })

    it('returns null if both params are null', () => {
      expect(example.twoParamsAll(null, null)).toBeNull()
    })

  })

  describe('configured with any', () => {

    it('does nothing if both params are non-null', () => {
      expect(example.twoParamsAny(12, 'foo')).toEqual('ok')
    })

    it('returns null if the first param is null', () => {
      expect(example.twoParamsAny(null, 'foo')).toBeNull()
    })

    it('returns null if the second param is null', () => {
      expect(example.twoParamsAny(12, null)).toBeNull()
    })

    it('returns null if both params are null', () => {
      expect(example.twoParamsAny(null, null)).toBeNull()
    })

  })

})
