import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/scripts/main.js',
  output: {
    file: 'build/js/main.min.js',
    format: 'iife',
    plugins: [
      terser(),
      ]
  },
  plugins: [
    json({ compact: true }),
    scss({
      output: "./build/css/main.min.css",
      failOnError: true,
      runtime: require("sass"),
      outputStyle: "compressed",
    })],
};