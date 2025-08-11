import 'reflect-metadata'

import { ServiceProvider } from '@h3ravel/core'

/**
 * Bootstraps your services and bindings.
 * 
 */
export class AppServiceProvider extends ServiceProvider {
    public static priority = 899

    register () {
        // Register bindings to the container. Runs before boot().
    }

    boot () {
        // Perform post-registration booting of services. Runs after all providers have been registered.
    }
}
