import { Application, ServiceProvider } from '@h3ravel/core'
import { HttpServiceProvider } from '@h3ravel/http'
import { RouteServiceProvider, AssetsServiceProvider } from '@h3ravel/router'
import { DatabaseServiceProvider } from '@h3ravel/database'
import { CacheServiceProvider } from '@h3ravel/cache'
import { QueueServiceProvider } from '@h3ravel/queue'
import { MailServiceProvider } from '@h3ravel/mail'
import { ConfigServiceProvider } from '@h3ravel/config'
import { FilesystemProvider } from '@h3ravel/filesystem'
import { AppServiceProvider } from 'src/app/Providers/AppServiceProvider'

/**
 * Default service provider have a priority ranging from 999-990
 * We recommend leaving the 900 range for the defaults.
 * Service provider names should be unique as duplicates might be filtered out
 * including custom providers matching core provider names
 */
export default <Array<new (_app: Application) => ServiceProvider>>[
    HttpServiceProvider,
    ConfigServiceProvider,
    RouteServiceProvider,
    AssetsServiceProvider,
    DatabaseServiceProvider,
    CacheServiceProvider,
    QueueServiceProvider,
    MailServiceProvider,
    AppServiceProvider,
    FilesystemProvider,
]
