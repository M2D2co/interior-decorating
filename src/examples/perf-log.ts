import { PerfLog } from "../decorators/perf-log.decorator";

export class TestPerfLog {
  x: number = 0

  private wait(ms: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }

  @PerfLog
  zeroTime() {
    this.x++;
  }

  @PerfLog
  async shortTime() {
    await this.wait(10)
    this.x++;
  }

  @PerfLog
  async longTime() {
    await this.wait(350)
    this.x++;
  }

}
