import { Application, Kernel } from '@h3ravel/core'
import { LogRequests, Request, Response } from '@h3ravel/http'

import { HttpContext } from '@h3ravel/shared'
import providers from 'src/bootstrap/providers'

export default class {
    async bootstrap () {
        const app = new Application(process.cwd())

        await app.quickStartup(providers)

        const h3App = app.make('http.app')

        const kernel = new Kernel((event) => HttpContext.init({
            app,
            request: new Request(event, app),
            response: new Response(event, app)
        }), [new LogRequests()])

        h3App.use((event) => kernel.handle(event, async () => undefined))

        await app.fire(h3App)
    }
}
