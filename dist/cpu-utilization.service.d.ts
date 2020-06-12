/**
 * Injectable Class to change the CPU-Load via the UI.
 */
export declare class CpuUtilizationService {
    private cpuLoad;
    getCpuLoad(): Promise<number>;
    setCpuLoad(newCpuLoad: number): void;
    private recordCpuUsage;
    private cpuAverage;
}
//# sourceMappingURL=cpu-utilization.service.d.ts.map