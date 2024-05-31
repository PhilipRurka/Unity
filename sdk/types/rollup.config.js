import pkg from './package.json';
import sharedConfig from '@unity/rollup-config/sdk'

const dependencies = {
  ...pkg.dependencies,
  ...pkg.devDependencies,
};

const rollupConfig = [
  ...sharedConfig({dependencies})
]

export default rollupConfig