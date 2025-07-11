import { TestPerfLog } from "../examples/perf-log"

describe('LogParams Method Decorator', () => {
  let example: TestPerfLog

  beforeEach(() => {
    example = new TestPerfLog()
  })

  it('logs time on zeroTime', () => {
    spyOn(console, 'time')
    spyOn(console, 'timeEnd')
    example.zeroTime()
    expect(console.time).toHaveBeenCalledTimes(1)
    expect(console.timeEnd).toHaveBeenCalledTimes(1)
  })

  it('logs time on shortTime', () => {
    spyOn(console, 'time')
    spyOn(console, 'timeEnd')
    example.shortTime()
    expect(console.time).toHaveBeenCalledTimes(1)
    expect(console.timeEnd).toHaveBeenCalledTimes(1)
  })

  it('logs time on longTime', () => {
    spyOn(console, 'time')
    spyOn(console, 'timeEnd')
    example.longTime()
    expect(console.time).toHaveBeenCalledTimes(1)
    expect(console.timeEnd).toHaveBeenCalledTimes(1)
  })

})
