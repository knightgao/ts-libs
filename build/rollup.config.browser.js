import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'vueLibs',
    file: 'dist/vueLibs.min.js',
    format: 'iife',
    sourcemap: true
  },
})
export default config;