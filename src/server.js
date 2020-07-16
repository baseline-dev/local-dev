import Koa from 'koa';
import debug from 'debug';
import {initServer} from './lib/server';
import {initRoutes} from './lib/router';
const log = debug('local-server');

async function init(opts) {
  const app = new Koa();
  initRoutes(app, {
    middlewaresDir: opts.middlewaresDir,
    routesDir: opts.routesDir
  });
  return initServer(app);
}

async function close(app) {
  log(`Stopping server....`)
  await app.close();
}

export {
  init,
  close
}
