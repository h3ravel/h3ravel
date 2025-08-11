import { Application, Controller, Injectable } from '@h3ravel/core'

export class HomeController extends Controller {
    @Injectable()
    public async index (app: Application) {
        const view = app.make('view')

        return view('index', {
            links: {
                documentation: 'https://h3ravel.toneflix.net/docs',
                performance: 'https://h3ravel.toneflix.net/performance',
                integration: 'https://h3ravel.toneflix.net/h3-integration',
                features: 'https://h3ravel.toneflix.net/features',
            }
        })
    }
}
