import { Router } from 'express';

import { metricsRouter } from '@modules/metrics/infra/http/routes';

const routes = Router();

routes.use('/metrics', metricsRouter);

export { routes };
