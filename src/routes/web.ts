import { HomeController } from 'app/http/controllers/HomeController'
import { Router } from '@h3ravel/router'

export default (router: Router) => {
    router.get('/', HomeController, 'index')
}
