import { Application, h3ravel } from '@h3ravel/core'
import { testApp, TestApplication, type TestClient } from '@h3ravel/foundation'
import { fileURLToPath } from 'node:url'
import { afterAll, beforeAll, describe, it, vi } from 'vitest'

import providers from '../src/bootstrap/providers'

const basePath = fileURLToPath(new URL('..', import.meta.url))

describe('basic app HTTP testing', () => {
    let client: TestClient
    let app: Application
    console.table = vi.fn(() => 0)

    afterAll(() => {
        vi.resetAllMocks()
    })

    beforeAll(async () => {
        app = await h3ravel(providers, basePath, {
            autoload: true,
            initialize: false,
        })

        new TestApplication().configure(app, basePath)
        await app.boot()
        client = await testApp(app)
    })

    it('loads API routes with their configured prefix', async () => {
        await client
            .get('/api')
            .expect(200)
            .expect({ api: 'H3ravel Framework', version: app.getVersion('app') })
    })

    it('loads WEB routes with their configured prefix', async () => {
        await client
            .get('/')
            .expect(200)
            .contains('<h1 class="logo-text">H3ravel</h1>')
    })
})
