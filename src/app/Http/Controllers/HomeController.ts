import { Application, Injectable } from '@h3ravel/core'

import { Mailer } from '@h3ravel/mail'

export class HomeController {
    @Injectable()
    public async index (app: Application, mail: Mailer) {
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
