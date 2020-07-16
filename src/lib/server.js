import http from 'http';
import debug from 'debug';

const log = debug('local-server');

function initServer(app) {
  const httpPort = process.env.PORT || 8081;
  const appCallback = app.callback();

  log('Starting http server');

  return http
    .createServer(appCallback)
    .listen(httpPort, () => log(`App listening on http port ${httpPort}....`));
}

export {
  initServer
}