
exports.up = function(knex) {
    return knex.schema.createTable('players', function(table){
        table.increments('id')
        table.text('name').notNullable()
        table.text('email').unique().notNullable()
        table.text('password').notNullable()
        table.integer('score').nullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('players')
  };
  