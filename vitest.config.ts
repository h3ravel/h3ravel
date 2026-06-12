import { defineConfig } from 'vitest/config'

export default defineConfig({
    resolve: {
        tsconfigPaths: true,
    } as never,
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
