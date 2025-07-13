import { AngularPerformance } from "../decorators/angular-performance.decorator";

@AngularPerformance()
export class TestAngularPerformance {
  x: number = 0
  y: string = ''

  constructor() {
    console.log('constructed')
  }

  ngOnInit() {
    console.log('onInit')
  }

  ngAfterViewInit() {
    console.log('afterViewInit')
  }

  zeroParams() {
    this.x++;
  }

  oneParam(s: string) {
    this.y = s
  }

  twoParams(n: number, s:string) {
    this.x = n
    this.y = s
  }
}
