import http from 'http';
import debug from 'debug';

const log = debug('local-server');

function initServer(app, port = 8081) {
  const httpPort = process.env.PORT || port;
  const appCallback = app.callback();

  log('Starting http server');

  return http
    .createServer(appCallback)
    .listen(httpPort, () => log(`App listening on http port ${httpPort}....`));
}

export {
  initServer
}