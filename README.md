# Interior Decorating
## Clean up your TypeScript code with Decorators

This repository supports the article _Interior Decorating_ with the full code examples and supporting unit tests.

# Decorators

- [@LogParams](./tree/main/src/decorators/log-params.decorator.ts)
- [@Memoize](./tree/main/src/decorators/memoize.decorator.ts)
- [@PassNull](./tree/main/src/decorators/pass-null.decorator.ts)
- [@PerfLog](./tree/main/src/decorators/perf-log.decorator.ts)
- [@Persist](./tree/main/src/decorators/persist.decorator.ts)

See also [examples](./tree/main/src/examples) and [tests](./tree/main/src/tests).

## Angular Performance

The `@AngularPerformance` class decorator is configurable by passing in a boolean parameter to enable/disable the performance reporting. This decorator uses the Performance API for high-resolution tracking and full integration with the browser's reporting dashboard.

- [@AngularPerformance Decorator](./tree/main/angular/src/app/angular-performance.decorator.ts)
- [Example Component](./tree/main/angular/src/app/app.component.ts)
