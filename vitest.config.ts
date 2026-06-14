import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'

const basicAppSource = fileURLToPath(new URL('./src/', import.meta.url))

export default defineConfig({
    resolve: {
        alias: [
            { find: /^src\/(.+)$/, replacement: `${basicAppSource}$1` },
            { find: /^src$/, replacement: basicAppSource + 'index.ts' },
        ],
        // tsconfigPaths: true,
    },
    test: {
        include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
        exclude: ['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**', '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*', '**/.h3ravel/**'],
        environment: 'node',
        root: './',
        passWithNoTests: true,
        coverage: {
            reporter: ['text', 'json', 'html', 'lcov'],
            exclude: ['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**', '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*', '**/.h3ravel/**'],
        }
    },
})
