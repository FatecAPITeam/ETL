import 'reflect-metadata';

import { container } from 'tsyringe';

import { MetricsRepository } from '@modules/metrics/infra/typeorm/repositories';
import { IMetricsRepository } from '@modules/metrics/repositories';

container.registerSingleton<IMetricsRepository>(
  'MetricsRepository',
  MetricsRepository,
);
