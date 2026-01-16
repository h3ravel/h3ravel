import { Route } from '@h3ravel/support/facades'
import { WelcomeController } from 'src/app/Http/Controllers/WelcomeController'

Route.get('/', [WelcomeController, 'index']).name('index')