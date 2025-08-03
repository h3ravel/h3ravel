import { AuthMiddleware } from 'App/Http/Middlewares/AuthMiddleware'
import { Router } from '@h3ravel/router'
import { UserController } from 'App/Http/Controllers/UserController'

export default (Route: Router) => {
    Route.group({
        prefix: '/', middleware: [
            (_event) => {
                console.log('Incoming request')
            }
        ]
    }, () => {
        Route.apiResource('/users', UserController, [new AuthMiddleware()])
    })

    Route.get('/hello', () => 'Hello', 'hello.route')
}
