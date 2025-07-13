import { TestAngularPerformance } from "../examples/angular-performance"

describe('AngularPerformance Class Decorator', () => {
  let example: TestAngularPerformance

  beforeEach(() => {
    example = new TestAngularPerformance()
  })

  it('logs void on no params', () => {
    example.zeroParams()
  })

  it('logs one param', () => {
    example.oneParam('foo')
  })


  it('logs two params', () => {
    example.twoParams(15, 'fifteen')
  })

})
