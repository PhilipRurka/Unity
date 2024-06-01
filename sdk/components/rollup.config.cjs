const dependenciesPkg = require('../../packages/frontend/dependencies/package.json');
const devDependenciesPkg = require('../../packages/frontend/devDependencies/package.json');
const pkg = require('./package.json');
const sharedConfig = require('@unity/rollup-config/sdk.cjs');

const dependencies = {
  ...dependenciesPkg.dependencies,
  ...devDependenciesPkg.devDependencies,
  ...pkg.dependencies,
  ...pkg.devDependencies,
};

module.exports = sharedConfig({ dependencies });
