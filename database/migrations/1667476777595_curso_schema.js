'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CursoSchema extends Schema {
  up () {
    this.create('cursos', (table) => {
      table.increments()
      table.string('name', 64).notNullable()
        table.string('description', 128).notNullable()
        table.string('url', 64).notNullable()
        table.decimal('price')
      table.timestamps()
    })
  }

  down () {
    this.drop('cursos')
  }
}

module.exports = CursoSchema
