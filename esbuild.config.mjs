import alias from 'esbuild-plugin-alias'
import { build } from 'esbuild'

build({
    entryPoints: ['src/server.ts'],
    bundle: true,
    platform: 'node',
    target: 'node18',
    outfile: 'dist/server.cjs',
    sourcemap: true,
    minify: true,
    external: [
        'pg', 'mysql2', 'better-sqlite3'
    ],
    plugins: [
        alias({
            App: './src/app',
            root: './',
            http: './src/http',
            config: './src/config',
            routes: './src/routes',
            resources: './src/resources',
        }),
    ],
    // eslint-disable-next-line no-undef
}).catch(() => process.exit(1))
