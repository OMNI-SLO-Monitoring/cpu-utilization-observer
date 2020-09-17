import { Controller, Get } from "@nestjs/common";
import { CpuUtilizationService } from "./cpu-utilization.service";

/**
 * CPU Controller to show intern value on endpoint: /cpu. 
 */
@Controller('cpu')
export class CpuUtilizationController {

  constructor(private cpuUtilizationService: CpuUtilizationService) {}

  /**
   * handles get-request for the actual current CPU value
   */
  @Get()
  async fetchCPUUtilizationLoad() {
    return this.cpuUtilizationService.getCpuLoad();
  }

  /**
   * handles request to /simulated and shows a simulated CPU value with a hard coded CPU utilization
   */
  @Get('simulated')
  fetchSimulatedCpuUtilizationLoad() {
    return this.cpuUtilizationService.simulatedCpuLoad;
  }
}