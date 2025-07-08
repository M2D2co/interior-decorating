import { TestLogParams } from "../examples/log-params"

describe('LogParams Method Decorator', () => {
  let example: TestLogParams

  beforeEach(() => {
    example = new TestLogParams()
  })

  it('logs void on no params', () => {
    spyOn(console, 'debug')
    example.zeroParams()
    expect(console.debug).toHaveBeenCalledWith('zeroParams Params void')
  })

  it('logs one param', () => {
    spyOn(console, 'debug')
    example.oneParam('foo')
    expect(console.debug).toHaveBeenCalledWith('oneParam Params', 'foo')
  })


  it('logs two params', () => {
    spyOn(console, 'info')
    example.twoParams(15, 'fifteen')
    expect(console.info).toHaveBeenCalledWith('twoParams Params', 15, 'fifteen')
  })

})
