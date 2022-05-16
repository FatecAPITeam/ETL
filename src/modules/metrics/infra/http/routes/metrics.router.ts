// import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

import { MetricsController } from '../controllers';

const metricsRouter = Router();
const metricsController = new MetricsController();

metricsRouter.get('/', metricsController.index);

export { metricsRouter };
