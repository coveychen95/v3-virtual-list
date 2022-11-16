import babel from '@rollup/plugin-babel'
import banner from './banner.js'
import json from '@rollup/plugin-json'
import typescript from "@rollup/plugin-typescript";

export default {
  external: ['vue'],
  input: './src/main.ts',
  output: {
    format: 'umd',
    file: './dist/index.js',
    name: 'VirtualList',
    sourcemap: false,
    globals: {
      vue: 'Vue',
    },
    banner: banner.replace(/\n/, '')
  },
  plugins: [
    json(),
    typescript(),
    babel(),
  ]
}