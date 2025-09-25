import 'reflect-metadata'

import app from 'src/bootstrap/app'

new app().bootstrap();

['SIGINT', 'SIGTERM', 'SIGTSTP'].forEach(sig => process.on(sig, () => {
    process.exit(0)
}))
