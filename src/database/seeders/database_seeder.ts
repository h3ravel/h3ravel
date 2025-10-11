import { DB, Seeder } from '@h3ravel/database'

import { Hash } from '@h3ravel/hashing'

export default class DatabaseSeeder extends Seeder {
  /**
   * Run the database seeds.
   */
  async run () {
    await DB.table('users').insert({
      name: 'John Doe',
      email: 'demo@example.com',
      password: await Hash.make('password')
    })
  }
}
