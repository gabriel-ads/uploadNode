
exports.up = function(knex) {
    return knex.schema.createTable('questions', function(table){
        table.increments('id')
        table.text('question').notNullable()
        table.text('answer_1').notNullable()
        table.text('answer_2').notNullable()
        table.text('answer_3').notNullable()
        table.text('answer_4').notNullable()
        table.integer('answer_correct').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('questions')
};
