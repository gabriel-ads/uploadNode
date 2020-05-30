
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
      table.increments('id')
      table.text('nome').notNullable()
      table.text('email').unique().notNullable()
      table.text('senha').notNullable()
      table.integer('score').Nullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
