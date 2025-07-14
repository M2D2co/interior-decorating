import { Memoize } from "../decorators/memoize.decorator";

export class TestMemoize {
  x: number = 0
  y: string = ''
  z: number = 100

  @Memoize
  zeroParams() {
    this.getStuff()
    return ++this.x;
  }

  @Memoize
  oneParam(s: string) {
    this.getStuff()
    this.y = s
    return 'one' + s
  }

  @Memoize
  twoParams(n: number, s: string) {
    this.getStuff()
    this.x = n
    this.y = s
    return 'two' + n + s
  }

  @Memoize
  objParams(n: number, s: string) {
    return { n, s }
  }

  getStuff() {
    this.z++
  }

}
