# cpu-utilization-observer

A Package that exports a NestJS Module, that measures the current cpu usage and also provides a simulated cpu usage value.

## Installation

Install: `npm i git+https://github.com/ccims/cpu-utilization-observer.git`

Import it into a module like so:

    imports: [
      CpuUtilizationModule
    ],

## Usage

GET request to `/cpu` to query the actual cpu usage.
GET request to `/cpu/simulated` to query the simulated cpu usage.

