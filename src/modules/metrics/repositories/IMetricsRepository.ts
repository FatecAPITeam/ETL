import { ICreateMetricsDTO } from '../dtos';
import { IMetrics } from '../schemas';

interface IMetricsRepository {
  create(data: ICreateMetricsDTO): Promise<IMetrics>;
}

export { IMetricsRepository };
