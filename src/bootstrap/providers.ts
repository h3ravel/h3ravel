import { Application } from '@h3ravel/core'
import { HttpServiceProvider } from '@h3ravel/http'
import { ConfigServiceProvider } from '@h3ravel/config'
import { IServiceProvider } from '@h3ravel/shared'
import { RouteServiceProvider, AssetsServiceProvider } from '@h3ravel/router'
import { DatabaseServiceProvider } from '@h3ravel/database'
import { CacheServiceProvider } from '@h3ravel/cache'
import { ConsoleServiceProvider } from '@h3ravel/console'
import { QueueServiceProvider } from '@h3ravel/queue'
import { MailServiceProvider } from '@h3ravel/mail'

/**
 * Default service provider have a priority ranging from 999-990
 * We recommend leaving the 900 range for the defaults.
 */
export default <Array<new (_app: Application) => IServiceProvider>>[
    HttpServiceProvider,
    ConfigServiceProvider,
    RouteServiceProvider,
    AssetsServiceProvider,
    DatabaseServiceProvider,
    CacheServiceProvider,
    ConsoleServiceProvider,
    QueueServiceProvider,
    MailServiceProvider,
]
