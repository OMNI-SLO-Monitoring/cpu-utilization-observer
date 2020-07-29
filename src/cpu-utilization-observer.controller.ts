import { Controller, Get } from "@nestjs/common";
import { CpuUtilizationService } from "./cpu-utilization.service";

/**
 * CPU Controller to show intern Value on port: /cpu. 
 */
@Controller('cpu')
export class CpuUtilizationController {

  constructor(private cpuUtilizationService: CpuUtilizationService) {}

  /**
   * handles get-request for the real current cpu value
   */
  @Get()
  async fetchCPUUtilizationLoad() {
    return this.cpuUtilizationService.getCpuLoad();
  }

  /**
   * handles request to /simulated and shows the simulated cpu value with a hard coded cpu utilization
   */
  @Get('simulated')
  fetchSimulatedCpuUtilizationLoad() {
    return this.cpuUtilizationService.simulatedCpuLoad;
  }
}