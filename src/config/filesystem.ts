import { Application } from '@h3ravel/core'

export default (app: Application) => {
    const env = app.make('env')

    return {

        /*
        |--------------------------------------------------------------------------
        | Public Mask
        |--------------------------------------------------------------------------
        |
        | Because of our current setup, we cannot serve static assets directly from
        | the root path of our app, (Attempting to serve /logo.png will break the /
        | route) because of this, static assets in the public directory will be
        | served from a masked path.
        |
        */

        public_mask: 'assets',

        /*
        |--------------------------------------------------------------------------
        | Filesystem Disks
        |--------------------------------------------------------------------------
        |
        | Below you may configure as many filesystem disks as necessary, and you
        | may even configure multiple disks for the same driver. Examples for
        | most supported storage drivers are configured here for reference.
        |
        | Supported Drivers: "local", "*ftp", "*sftp", "*s3"
        |
        */

        disks: {
            public: {
                driver: 'local',
                root: app.getPath('storage', 'app/public'),
                url: env('APP_URL') + '/storage',
                visibility: 'public'
            }
        },

        /*
        |--------------------------------------------------------------------------
        | Symbolic Links
        |--------------------------------------------------------------------------
        |
        | Here you may configure the symbolic links that will be created when the
        | `storage:link` Artisan command is executed. The array keys should be
        | the locations of the links and the values should be their targets.
        |
        */

        links: {
            [app.getPath('public')]: app.getPath('storage', 'app/public'),
        },
    }
}
