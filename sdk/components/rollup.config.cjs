const pkg = require('./package.json');
const sharedConfig = require('@unity/rollup-config/rollup.config.cjs');

const dependencies = {
  ...pkg.dependencies,
  ...pkg.devDependencies,
};

module.exports = sharedConfig({ dependencies });
