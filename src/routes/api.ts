import { Route } from '@h3ravel/support/facades'

Route.get('/', () => {
    return {
        api: 'H3ravel Framework',
        version: app().getVersion('app')
    }
}).name('index')