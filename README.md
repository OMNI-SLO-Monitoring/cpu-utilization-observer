# cpu-utilization-observer

A Package that exports a NestJS Module, that measures the current CPU Usage and provides an endpoint under `/cpu` to query cpu usage.

## Installation

Install: `npm i git+https://github.com/ccims/cpu-utilization-observer.git`

Import it into a module:

    imports: [
      CpuUtilizationModule
    ],

## Usage

Make Get Request to `/cpu` to query cpu usage

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License