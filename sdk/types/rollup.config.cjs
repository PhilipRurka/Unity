const pkg = require('./package.json');
const sharedConfig = require('@unity/rollup-config/sdk.cjs');

const dependencies = {
  ...pkg.dependencies,
  ...pkg.devDependencies,
};

module.exports = sharedConfig({ dependencies });
