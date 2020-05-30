
exports.up = function(knex) {
    return knex.schema.createTable('ranking', function(table){
        table.increments('id')
        table.integer('player_id').unsigned().references('id').inTable('players');
        table.text('name').nullable()
        table.integer('score').nullable()
        
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('ranking')
  };