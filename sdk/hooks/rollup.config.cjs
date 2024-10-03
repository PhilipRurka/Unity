const dependenciesPkgPath = require.resolve('@unity/frontend-dependencies/package.json');
const devDependenciesPkgPath = require.resolve('@unity/frontend-dev-dependencies/package.json');
const pkg = require('./package.json');
const sharedConfig = require('@unity/rollup-config/sdk.cjs');

const dependencies = {
  ...dependenciesPkgPath.dependencies,
  ...devDependenciesPkgPath.devDependencies,
  ...pkg.dependencies,
  ...pkg.devDependencies,
};

module.exports = sharedConfig({ dependencies });
