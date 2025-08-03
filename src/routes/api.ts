import { AuthMiddleware } from 'app/http/middlewares/AuthMiddleware'
import { Router } from '@h3ravel/router'
import { UserController } from 'app/http/controllers/UserController'

export default (router: Router) => {
    router.group({
        prefix: '/', middleware: [
            (_event) => {
                console.log('Incoming request')
            }
        ]
    }, () => {
        router.apiResource('/users', UserController, [new AuthMiddleware()])
    })

    router.get('/hello', () => 'Hello', 'hello.route')
}
