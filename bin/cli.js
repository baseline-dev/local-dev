#!/usr/bin/env node

require = require('esm')(module)

const {init} = require('../src/server');
const yargs = require('yargs');

const { argv } = yargs
  .describe('middlewares-dir', 'Path to middleware directory. These middlewares are applied to all routes.')
  .describe('routes-dir', 'Path to route directory.')
  .alias('middlewares-dir', 'm')
  .alias('routes-dir', 'r')
  .demandOption(['m','r']);

(async () => {
  await init(argv);
})();
