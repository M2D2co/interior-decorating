import { PassNull } from "../decorators/pass-null.decorator";

export class TestPassNull {
  x: number = 0
  y: string = ''

  @PassNull()
  zeroParams() {
    return 'ok'
  }

  @PassNull()
  oneParamAny(s: string) {
    return 'ok' + s
  }

  @PassNull('all')
  oneParamAll(s: string) {
    return 'ok' + s
  }

  @PassNull('any')
  twoParamsAny(n: number, s:string){
    this.x = n
    this.y = s
    return 'ok'
  }

  @PassNull('all')
  twoParamsAll(n: number, s:string) {
    this.x = n
    this.y = s
    return 'ok'
  }

}
