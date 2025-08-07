import { Controller } from '@h3ravel/core'
import { HttpContext } from '@h3ravel/http'

export class HomeController extends Controller {
    public async index ({ app }: HttpContext) {
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
