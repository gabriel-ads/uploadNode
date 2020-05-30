
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {name: 'Gabriel Silva', email:'gabriel@teste.com', password:123,score:120},
      ]);
    });
};
