import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { MetricsService } from '@modules/metrics/services';

class MetricsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const metricsService = container.resolve(MetricsService);
    const metrics = await metricsService.execute();
    return response.json(metrics);
  }
}

export { MetricsController };
