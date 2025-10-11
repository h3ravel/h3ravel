import 'reflect-metadata'
import App from 'src/bootstrap/app'

const appInstance = new App();
appInstance.bootstrap();

['SIGINT', 'SIGTERM', 'SIGTSTP'].forEach(sig => process.on(sig, () => {
    process.exit(0)
}))

export { appInstance as app };
