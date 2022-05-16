/* eslint-disable no-plusplus */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-await-in-loop */
import { inject, injectable } from 'tsyringe';

import { ICreateMetricsDTO } from '../dtos';
import { PromRequest } from '../infra/Prometheus/PromRequest';
import { IMetricsRepository } from '../repositories';
import { IMetrics } from '../schemas';

const promRequest = new PromRequest();

@injectable()
class MetricsService {
  constructor(
    @inject('MetricsRepository')
    private metricsRepository: IMetricsRepository,
  ) {}

  public async execute(): Promise<any> {
    const metrics = [
      'disk_free_bytes',
      'hikaricp_connections_acquire_seconds_count',
      'hikaricp_connections_creation_seconds_count',
      'hikaricp_connections_pending',
      'hikaricp_connections_timeout_total',
      'hikaricp_connections_usage_seconds_count',
      'http_server_requests_seconds_count',
      'http_server_requests_seconds_max',
      'http_server_requests_seconds_sum',
      'jdbc_connections_active',
      'jvm_memory_max_bytes',
      'jvm_memory_usage_after_gc_percent',
      'jvm_memory_used_bytes',
      'logback_events_total',
      'process_cpu_usage',
      'system_cpu_usage',
    ];
    let c = 0;
    console.log(new Date().toISOString());

    setInterval(async () => {
      console.log(new Date().toISOString());
      for (const metric of metrics) {
        const promData = await promRequest.execute(metric);
        c++;
        console.log('********************************************************');
        console.log('********************************************************');
        console.log(c);
        console.log(!!promData[0]);

        if (promData[0]) {
          const time = promData[0].value[0] * 1000;
          const data: ICreateMetricsDTO = {
            name: promData[0].metric.__name__,
            date: new Date(time).toISOString(),
            value: promData[0].value[1],
          };
          console.log(
            '********************************************************',
          );
          console.log(data);
          console.log(
            '********************************************************',
          );
          await this.metricsRepository.create(data);
        } else {
          const dataOffline: ICreateMetricsDTO = {
            name: 'Servidor offline',
            date: new Date().toISOString(),
            value: 'Servidor offline',
          };
          console.log(
            '********************************************************',
          );
          console.log(dataOffline);
          console.log(
            '********************************************************',
          );
          await this.metricsRepository.create(dataOffline);
        }
      }
    }, 300000);

    return true;
  }
}

export { MetricsService };
