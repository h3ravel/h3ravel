import { Migration } from '@h3ravel/arquebus'
import { SchemaBuilder } from '@h3ravel/arquebus/types/query-builder'

export default class extends Migration {
  /**
    * Run the migrations.
    */
  async up (schema: SchemaBuilder) {
    await schema.createTable('users', (table) => {
      table.increments('id')
      table.string('name')
      table.string('email').unique()
      table.string('password').nullable()
      table.timestamps()
    })
  }

  /**
    * Reverse the migrations.
    */
  async down (schema: SchemaBuilder) {
    await schema.dropTableIfExists('users')
  }
}
