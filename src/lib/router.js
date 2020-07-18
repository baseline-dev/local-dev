import Router from '@koa/router';
import cors from '@koa/cors';
import { initRoutes as initializeRoutes } from '@baseline-dev/tower';
import { join } from 'path';

function initRoutes(app, opts) {
  if (typeof app === 'undefined') {
    throw new Error('App required');
  }
  
  const { getMiddlewares } = require(join(process.cwd(), opts.middlewaresDir));
  getMiddlewares(app).forEach(middleware => app.use(middleware));

  app.use(cors({
    origin: (ctx) => {
      if (!process.env.BASELINE_API_CORS_ORIGIN) return;

      const corsOrigin = process.env.BASELINE_API_CORS_ORIGIN.split(',');
      if (corsOrigin.indexOf(ctx.request.header.origin) < 0) return;
      
      return ctx.request.header.origin;
    }
  }));

  const router = new Router();
  router.use(router.allowedMethods());

  initializeRoutes(app, join(opts.routesDir));
}

export {
  initRoutes
}