import { Application, h3ravel } from '@h3ravel/core'

import { UnprocessableEntityHttpException } from '@h3ravel/foundation'
import path from 'node:path'
import providers from 'src/bootstrap/providers'

export default class {
    /**
     * Initialize the app then fire up the dev server
     * 
     * @returns 
     */
    async bootstrap () {
        const app = await h3ravel(providers, process.cwd(), { autoload: true, initialize: false })
        this.configure(app)
        return await app.fire()
    }

    /**
     * Initialize the app without firing up the dev server
     * 
     * @returns 
     */
    async init () {
        const app = await h3ravel(providers, process.cwd(), { autoload: true, initialize: false })
        this.configure(app)
        return await app.boot()
    }

    configure (app: Application) {
        return app.configure()
            .withRouting({
                web: path.join(process.cwd(), 'src/routes/web.ts'),
                api: path.join(process.cwd(), 'src/routes/api.ts'),
            })
            .withExceptions((exceptions) => {
                return exceptions
                    /**
                     * Register global reporters here
                     */
                    .report((error) => {
                        void error
                    })
                    /**
                     * Prevent some exceptions from being reported
                     */
                    .dontReport([
                        UnprocessableEntityHttpException,
                    ])
                    /**
                     * Configure request exception message truncation
                     */
                    .truncateRequestExceptionsAt(200)
            })
            .withMiddleware((callback) => {
                void callback
            })
    }
}
