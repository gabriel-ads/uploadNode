
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ranking').del()
    .then(function () {
      // Inserts seed entries
      return knex('ranking').insert([
        {player_id:1,name:'Joao',score:10},
      ]);
    });
};
