import { defineConfig } from '@h3ravel/arquebus'

export default defineConfig({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    database: undefined,
    user: undefined,
    password: undefined,
  },
  migrations: {
    table: 'migrations',
    path: './migrations',
  },
  factories: {
    path: './factories',
  },
  seeders: {
    path: './seeders',
  },
  models: {
    path: './models'
  }
})

