import { LogParams } from "../decorators/log-params.decorator";



export class TestLogParams {
  x: number = 0
  y: string = ''

  @LogParams()
  zeroParams() {
    this.x++;
  }

  @LogParams()
  oneParam(s: string) {
    this.y = s
  }

  @LogParams('info')
  twoParams(n: number, s:string) {
    this.x = n
    this.y = s
  }

}
