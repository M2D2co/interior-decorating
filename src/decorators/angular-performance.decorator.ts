/**
 * Class decorator that reports the timing of each Angular component lifecycle function.
 * 
 * @param enabled `true` by default; set to false to disable performance marking (such as production environment)
 */
export function AngularPerformance(enabled: boolean = true) {
  /**
   * @param target the class constructor
   */
  return function _ClassDecorator<T extends NgClassConstructor>(target: T) {
    if(enabled) {
      setupMethod(target, 'ngOnInit', { measurementName: 'init', markStart: 'constructor' })
      setupMethod(target, 'ngAfterContentInit', { measurementName: 'contentInit', markStart: 'ngOnInit' })
      setupMethod(target, 'ngAfterViewInit', { measurementName: 'viewInit', markStart: 'ngOnInit' })
      setupMethod(target, 'ngOnChanges')
      setupMethod(target, 'ngDoCheck')
      setupMethod(target, 'ngAfterContentChecked')
      setupMethod(target, 'ngAfterViewChecked')
      globalThis.performance.mark(`${target.name}_constructor`)
    }
    return target
  }
}

interface NgClassConstructor {
  new(...args: any[]): {}
}

type Measure = {
  measurementName: string // measurement name
  markStart: string // method name
}

function setupMethod(constructor: any, methodName: string, measurement?: Measure) {
  const perf = globalThis.performance
  const className = constructor.name
  const original = constructor.prototype[methodName]
  let index = 0

  constructor.prototype[methodName] = function(...args: any) {
    if(measurement) {
      const _start = `${className}_${measurement.markStart}`
      const _end = `${className}_${methodName}`
      perf.mark(_end)
      if(!perf.getEntriesByName(_start, 'mark')?.length){
        console.warn('Missing starting performance mark', _start)
        return
      } else if(!perf.getEntriesByName(_end, 'mark')?.length) {
        console.warn('Missing ending performance mark', _end)
        return
      }
      perf.measure(
        `${className}_${measurement.measurementName}_${index++}`,
        _start,
        _end,
      )
    }
    const _key = `${className}_${methodName}_${index++}`
    perf.mark(_key)
    if(original) {
      original.apply(this, args)
    }
  }
}
