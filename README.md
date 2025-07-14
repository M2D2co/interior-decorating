# Interior Decorating

## Remodel your TypeScript code with Decorators

This repository supports the article _Interior Decorating_ with the full code examples and supporting unit tests.

## Decorators

- [@LogParams](src/decorators/log-params.decorator.ts)
- [@Memoize](src/decorators/memoize.decorator.ts)
- [@PassNull](src/decorators/pass-null.decorator.ts)
- [@PerfLog](src/decorators/perf-log.decorator.ts)
- [@Persist](src/decorators/persist.decorator.ts)

See also [examples](src/examples) and [tests](src/tests).

## Angular Performance

The `@AngularPerformance` class decorator is configurable by passing in a boolean parameter to enable/disable the performance reporting. This decorator uses the Performance API for high-resolution tracking and full integration with the browser's reporting dashboard.

- [@AngularPerformance Decorator](angular/src/app/angular-performance.decorator.ts)
- [Example Component](angular/src/app/app.component.ts)
