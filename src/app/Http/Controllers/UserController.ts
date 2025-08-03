import { Controller } from '@h3ravel/core'
import { HttpContext } from '@h3ravel/http'

export class UserController extends Controller {
    index () {
        return [{ id: 1, name: 'John Doe' }]
    }

    async store ({ request, response }: HttpContext) {
        return response
            .setStatusCode(202)
            .json({ message: `User ${await request.input('name')} created` })
    }

    show ({ request, response }: HttpContext) {
        return response
            .json({ id: request.input('id'), name: 'John Doe' })
    }

    async update ({ request, response }: HttpContext) {
        return response
            .setStatusCode(201)
            .json({ message: `User ${await request.input('name')} updated` })
    }

    destroy ({ request }: HttpContext) {
        return { message: `User ${request.input('id')} deleted` }
    }
}
