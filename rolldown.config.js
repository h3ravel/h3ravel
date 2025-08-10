import { cp, rm } from 'node:fs/promises'

import { build } from 'rolldown'
import { defineConfig } from 'tsup'

const base = defineConfig({
  platform: 'node',
  define: {
    'process.env.NODE_ENV': JSON.stringify('development'),
    'process.env.SRC_PATH': JSON.stringify('dist'),
  },
  resolve: {
    tsconfigFilename: 'tsconfig.json'
  },
  transform: {
    decorator: {
      legacy: true,
    },
  },
  external: [
    'fs',
    'os',
    'url',
    'path',
    'fs-readdir-recursive',
    /.*\/promises$/gi,
    /^node:.*/gi
  ],
})

const configs = defineConfig([
  {
    ...base,
    input: ['src/server.ts'],
    output: {
      dir: 'dist',
      format: 'esm',
      esModule: true,
      sourcemap: true,
    },
  },
  {
    ...base,
    input: ['src/routes/api.ts', 'src/routes/web.ts'],
    output: {
      dir: 'dist/routes',
      format: 'esm',
      esModule: true,
      sourcemap: true,
    },
  },
  {
    ...base,
    input: ['src/config/app.ts', 'src/config/filesystem.ts'],
    output: {
      dir: 'dist/config',
      format: 'esm',
      esModule: true,
      sourcemap: true,
    },
  }
])

await rm('dist', { force: true, recursive: true })

configs.forEach(async (config) => {
  await build(config)
})

await cp('src/resources', 'dist/resources', { force: true, recursive: true })

// export default defineConfig()
