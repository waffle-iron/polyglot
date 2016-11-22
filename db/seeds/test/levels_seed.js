exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('levels').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('levels').insert({name: 'A1 - Beginner'}),
        knex('levels').insert({name: 'A2 - Elementary'}),
        knex('levels').insert({name: 'B1 - Intermediate'}),
        knex('levels').insert({name: 'B2 - Upper Intermediate'}),
        knex('levels').insert({name: 'C1 - Advanced'}),
        knex('levels').insert({name: 'C2 - Master'})
      ]);
    });
};
