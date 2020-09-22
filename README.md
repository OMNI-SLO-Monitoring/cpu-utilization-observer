
<p align="center">
  <img src="https://raw.githubusercontent.com/ccims/overview-and-documentation/c97db39633418d2a0d4e5690a810d62fe5ff5247/app_logos/logo_final_6.25p.svg">
</p>

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

