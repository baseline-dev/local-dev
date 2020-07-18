import Koa from 'koa';
import debug from 'debug';
import {initServer} from './lib/server';
import {initRoutes} from './lib/router';
import koaStatic from 'koa-static';

const log = debug('local-server');

async function init(opts) {
  const app = new Koa();
  
  if (opts.staticDir) {
    app.use(koaStatic(opts.staticDir));
  }
  
  initRoutes(app, {
    middlewaresDir: opts.middlewaresDir,
    routesDir: opts.routesDir
  });

  return initServer(app, opts.port);
}

async function close(app) {
  log(`Stopping server....`)
  await app.close();
}

export {
  init,
  close
}
