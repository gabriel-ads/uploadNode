
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {question: 'O que é chevrolet', answer_1:'Um carro', answer_2:'Uma marca de carro', answer_3:'Uma bike', answer_4:'Um tenis', answer_correct: 2},
        {question: 'O que é um pudim', answer_1:'Um bolo', answer_2:'Uma sobremesa', answer_3:'Um doce', answer_4:'Marca de roupa', answer_correct: 2},
        {question: 'O que é uma abelha', answer_1:'Um cachorro', answer_2:'Uma comida', answer_3:'Um animal', answer_4:'Um inseto', answer_correct: 4},
      ]);
    });
};
