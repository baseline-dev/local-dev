#!/usr/bin/env node

require = require('esm')(module)

const {init} = require('../src/server');
const yargs = require('yargs');

const { argv } = yargs
  .describe('middlewares-dir', 'Path to middleware directory. These middlewares are applied to all routes.')
  .describe('routes-dir', 'Path to route directory.')
  .describe('static-dir', 'Path to static assets.')
  .describe('port', 'Port of development server.')
  .alias('middlewares-dir', 'm')
  .alias('routes-dir', 'r')
  .alias('static-dir', 's')
  .alias('port', 'p')
  .demandOption(['m','r']);

(async () => {
  await init(argv);
})();
