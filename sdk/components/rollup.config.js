import bundleSize from 'rollup-plugin-bundle-size';
import cleaner from 'rollup-plugin-cleaner';
import esbuild from 'rollup-plugin-esbuild';

import dependenciesPkg from '../../packages/frontend/dependencies/package.json';
import devDependenciesPkg from '../../packages/frontend/devDependencies/package.json';
import pkg from './package.json';

const dependencies = {
  ...dependenciesPkg.dependencies,
  ...devDependenciesPkg.devDependencies,
  ...pkg.dependencies,
  ...pkg.devDependencies,
};

export default {
  input: 'src/index.ts',
  external: Object.keys(dependencies),
  output: [
    {
      format: 'cjs',
      file: pkg.main,
      sourcemap: true,
    },
    {
      format: 'es',
      file: pkg.module,
      sourcemap: true,
    },
  ],
  plugins: [
    cleaner({
      targets: ['./dist/'],
    }),
    esbuild({
      sourceMap: true,
      minify: process.env.NODE_ENV === 'production',
      include: /\.[jt]sx?$/,
      tsconfig: './tsconfig.json',
    }),
    bundleSize(),
  ],
};
