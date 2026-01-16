import { Application, ServiceProvider } from '@h3ravel/core'
import { HttpServiceProvider } from '@h3ravel/http'
import { AppServiceProvider } from 'src/app/Providers/AppServiceProvider'

/**
 * Default service provider have a priority ranging from 999-990
 * We recommend leaving the 900 range for the defaults.
 * Service provider names should be unique as duplicates might be filtered out
 * including custom providers matching core provider names
 */
export default <Array<new (_app: Application) => ServiceProvider>>[
    AppServiceProvider,
    HttpServiceProvider,
] 
