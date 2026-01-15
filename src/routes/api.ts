import { Request } from '@h3ravel/http'
import { Router } from '@h3ravel/router'

export default (Route: Router) => {
    Route.group({ prefix: '/api' }, () => {
        Route.get('/', ({ app }: Request) => {
            return {
                api: 'H3ravel Framework',
                version: app().getVersion('app')
            }
        })
    })
}
