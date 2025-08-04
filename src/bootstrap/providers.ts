import { Application } from '@h3ravel/core'
import { IServiceProvider } from '@h3ravel/shared'

/**
 * Default service provider have a priority ranging from 999-990
 * We recommend leaving the 900 range for the defaults.
 */
export default <Array<new (_app: Application) => IServiceProvider>>[
    (await import('@h3ravel/http')).HttpServiceProvider,
    (await import('@h3ravel/config')).ConfigServiceProvider,
    (await import('@h3ravel/router')).RouteServiceProvider,
    (await import('@h3ravel/router')).AssetsServiceProvider,
    (await import('@h3ravel/database')).DatabaseServiceProvider,
    (await import('@h3ravel/cache')).CacheServiceProvider,
    (await import('@h3ravel/console')).ConsoleServiceProvider,
    (await import('@h3ravel/queue')).QueueServiceProvider,
    (await import('@h3ravel/mail')).MailServiceProvider,
]
