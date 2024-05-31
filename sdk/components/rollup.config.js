import dependenciesPkg from '../../packages/frontend/dependencies/package.json';
import devDependenciesPkg from '../../packages/frontend/devDependencies/package.json';
import pkg from './package.json';
import sharedConfig from '@unity/rollup-config/sdk'

const dependencies = {
  ...dependenciesPkg.dependencies,
  ...devDependenciesPkg.devDependencies,
  ...pkg.dependencies,
  ...pkg.devDependencies,
};

const rollupConfig = [
  ...sharedConfig({dependencies})
]

export default rollupConfig