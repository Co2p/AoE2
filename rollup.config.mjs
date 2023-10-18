import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
import terser from '@rollup/plugin-terser';

import json from "@rollup/plugin-json";

export default [
  {
    input: "src/scripts/main.ts",
    output: {
      file: 'build/js/main.min.js',
      format: 'cjs'
    },
    plugins: [
      typescript({ tsconfig: "./tsconfig.json", declarationDir: "build/lib", outDir: "build/lib" }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      scss({output: "build/css/main.min.css", outputStyle: "compressed"}),
      json({compact: true}),
      terser()
    ],
  }
];