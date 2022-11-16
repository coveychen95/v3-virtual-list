import prodConfig from './rollup.production.js'

// development mode just rewrite from production config.
export default Object.assign({}, prodConfig, {
  output: {
    ...prodConfig.output,
    file: './dist/index.js',
    sourcemap: true,
    banner: '/* eslint-disable */' // disable eslint when bundle with docs.
  }
})