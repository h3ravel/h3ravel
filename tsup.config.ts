import { defineConfig } from 'tsup'

const env = process.env.NODE_ENV || 'development'
const postCmd = env === 'development'
    ? `&& NODE_ENV=${env} SRC_PATH=dist node dist/server.js`
    : ''

export default defineConfig({
    entry: ['src/**/*.ts'],
    outDir: 'dist',
    format: ['esm'],
    target: 'node22',
    sourcemap: true,
    clean: true,
    watch: env === 'development',
    onSuccess: `cp -r ./src/resources ./dist ${postCmd}`,
    dts: true,
    skipNodeModulesBundle: false,
    external: [
        'fs',
        'os',
        'path',
        'dotenv',
        'node:fs',
        'node:os',
        'node:path',
        'node:fs/promises',
        'node:os/promises',
        'node:path/promises',
        'edge.js',
        'fs-readdir-recursive',
    ],
})
