import { getMongoRepository, MongoRepository } from 'typeorm';

import { ICreateMetricsDTO } from '@modules/metrics/dtos';
import { IMetricsRepository } from '@modules/metrics/repositories';
import { IMetrics } from '@modules/metrics/schemas';

import { Metrics } from '../schemas/Metrics';

class MetricsRepository implements IMetricsRepository {
  private metricsRepository: MongoRepository<Metrics>;

  constructor() {
    this.metricsRepository = getMongoRepository<Metrics>(Metrics, 'default');
  }

  public async create(data: ICreateMetricsDTO): Promise<IMetrics> {
    const metrics = this.metricsRepository.create(data);

    await this.metricsRepository.save(metrics);

    return metrics;
  }
}

export { MetricsRepository };
