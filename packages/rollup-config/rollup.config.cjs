const commonjs = require("@rollup/plugin-commonjs");
const bundleSize = require("rollup-plugin-bundle-size");
const cleaner = require("rollup-plugin-cleaner");
const esbuild = require("rollup-plugin-esbuild").default;

function sharedPlugins({ shouldAddCommonJs } = {}) {
  const plugins = [
    cleaner({
      targets: ["./dist/"],
    }),
  ];

  if (shouldAddCommonJs) {
    plugins.push(commonjs());
  }

  plugins.push(
    esbuild({
      sourceMap: true,
      minify: process.env.NODE_ENV === "production",
      include: /\.[jt]sx?$/,
      tsconfig: "@unity/tsconfig/nextjs.json",
    }),
    bundleSize()
  );

  return plugins;
}

module.exports = ({ dependencies }) => [
  {
    input: "src/index.ts",
    external: Object.keys(dependencies),
    output: {
      file: "dist/index.cjs.js",
      format: "cjs",
      exports: "auto",
      sourcemap: true,
    },
    cache: false, // Eventually remove this line
    plugins: sharedPlugins({ shouldAddCommonJs: true }),
  },
  {
    input: "src/index.ts",
    external: Object.keys(dependencies),
    output: {
      file: "dist/index.es.js",
      format: "es",
      sourcemap: true,
    },
    plugins: sharedPlugins(),
  },
];
