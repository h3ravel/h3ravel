import { Application, h3ravel } from '@h3ravel/core'

import { UnprocessableEntityHttpException } from '@h3ravel/foundation'
import path from 'node:path'
import providers from 'src/bootstrap/providers'

export default class {
    async bootstrap () {
        const app = await h3ravel(providers, process.cwd(), { autoload: true, initialize: false })
        this.configure(app)
        return await app.fire()
    }

    configure (app: Application) {
        return app.configure()
            .withRouting({
                web: path.join(process.cwd(), 'src/routes/web.ts'),
                api: path.join(process.cwd(), 'src/routes/api.ts'),
                // commands: path.join(process.cwd(), 'src/routes/console.ts'),
                // channels: path.join(process.cwd(), 'src/routes/channels.ts'),
                // health: '/up',
            })
            .withExceptions((exceptions) => {
                return exceptions
                    /**
                     * Register global reporters here
                     */
                    .report((error) => {
                        console.error('Unhandled Exception:', error.message, '(Reported at src/bootstrap/app.ts)')
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
            .withMiddleware(() => {
            })
    }
}
