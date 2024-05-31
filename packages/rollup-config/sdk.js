import commonjs from "@rollup/plugin-commonjs";
import bundleSize from "rollup-plugin-bundle-size";
import cleaner from "rollup-plugin-cleaner";
import esbuild from "rollup-plugin-esbuild";
import typescript from "rollup-plugin-typescript2";

const sharedPluggins =
  ({ shouldAddCommonJs }) =>
  () => {
    const plugins = [
      cleaner({
        targets: ["./dist/"],
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      shouldAddCommonJs && commonjs(),
      esbuild({
        sourceMap: true,
        minify: process.env.NODE_ENV === "production",
        include: /\.[jt]sx?$/,
        tsconfig: "./tsconfig.json",
      }),
      bundleSize(),
    ];

    return plugins.filter(Boolean);
  };

const sdk = ({ dependencies }) => [
  {
    input: "src/index.ts",
    external: Object.keys(dependencies),
    output: {
      file: "dist/index.cjs.js",
      format: "cjs",
      exports: "auto",
      sourcemap: true,
    },
    plugins: sharedPluggins({ shouldAddCommonJs: true }),
  },
  {
    input: "src/index.ts",
    external: Object.keys(dependencies),
    output: {
      file: "dist/index.es.js",
      format: "es",
      sourcemap: true,
    },
    plugins: sharedPluggins(),
  },
];

export default sdk;
