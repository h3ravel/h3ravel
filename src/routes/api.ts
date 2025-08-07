import { AuthMiddleware } from 'App/Http/Middlewares/AuthMiddleware'
import { Router } from '@h3ravel/router'
import { UserController } from 'App/Http/Controllers/UserController'

export default (Route: Router) => {
    Route.group({ prefix: '/api' }, () => {
        Route.apiResource('/users', UserController, [new AuthMiddleware()])
    })

    Route.get('/hello', () => 'Hello').name('hello.route')
}
