import { HttpContext, Middleware } from '@h3ravel/http'

export class AuthMiddleware extends Middleware {
    async handle (
        { request, response }: HttpContext,
        next: () => Promise<unknown>
    ): Promise<unknown> {
        if (!request.input('authorization')) {
            response.setStatusCode(401)
            return { message: 'Unauthorized' }
        }

        return await next()
    }
}
