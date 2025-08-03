import { HomeController } from 'App/Http/Controllers/HomeController'
import { Router } from '@h3ravel/router'

export default (Route: Router) => {
    Route.get('/', HomeController, 'index')
}
