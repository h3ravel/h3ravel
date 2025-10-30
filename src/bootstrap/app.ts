import { h3ravel } from '@h3ravel/core'
import providers from 'src/bootstrap/providers'

export default class {
    async bootstrap () {
        const app = await h3ravel(
            providers,
            process.cwd(),
            {
                autoload: true
            },
            async () => undefined
        )

        return await app.fire()
    }
}
