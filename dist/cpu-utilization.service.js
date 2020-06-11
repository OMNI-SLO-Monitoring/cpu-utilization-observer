"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpuUtilizationService = void 0;
const common_1 = require("@nestjs/common");
/**
 * Injectable Class to change the CPU-Load via the UI.
 */
let CpuUtilizationService = class CpuUtilizationService {
    constructor() {
        //default value for cpu load is 70
        this.cpuLoad = 70;
    }
    //returns the current cpu load of the database service
    getCpuLoad() {
        return this.cpuLoad;
    }
    //Sets the cpuLoad to given Number.
    setCpuLoad(newCpuLoad) {
        this.cpuLoad = newCpuLoad;
    }
};
CpuUtilizationService = __decorate([
    common_1.Injectable()
], CpuUtilizationService);
exports.CpuUtilizationService = CpuUtilizationService;
//# sourceMappingURL=cpu-utilization.service.js.map