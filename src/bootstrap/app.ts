import { LogRequests, Request, Response } from '@h3ravel/http'

import { Application } from '@h3ravel/core'
import { Kernel } from '@h3ravel/core'
import providers from 'src/bootstrap/providers'

export default class {
    async bootstrap () {
        const app = new Application(process.cwd())

        app.registerProviders(providers)

        await app.registerConfiguredProviders()
        await app.boot()

        const h3App = app.make('http.app')
        const serve = app.make('http.serve')

        const kernel = new Kernel((event) => ({
            request: new Request(event),
            response: new Response(event)
        }), [new LogRequests()])

        h3App.use((event) => kernel.handle(event, async () => undefined))

        serve(h3App, { port: 3000 })
        console.log('🚀 H3ravel running at http://localhost:3000')
    }
}
