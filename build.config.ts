import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  rollup: {
    emitCJS: true
  },
  outDir: './dist',
  externals: ['playwright', 'playwright-core']
})
