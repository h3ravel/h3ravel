import { Router } from '@h3ravel/router'
import { WelcomeController } from 'src/app/Http/Controllers/WelcomeController'

export default (Route: Router) => {
    Route.get('/', [WelcomeController, 'index'])
}
