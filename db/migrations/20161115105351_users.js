
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.increments().unsigned();
      table.string('full_name');
      table.string('email');
      table.string('facebook_id');
    }),
    knex.schema.createTable('learners', table => {
      table.increments();
      table.integer('user_id').references('id').inTable('users');
      table.integer('language_id').references('id').inTable('languages');
      table.string('level');
    }),
    knex.schema.createTable('teachers', table => {
      table.increments();
      table.integer('user_id').references('id').inTable('users');
      table.integer('language_id').references('id').inTable('languages');
      table.string('level');
    }),
    knex.schema.createTable('languages', table => {
      table.increments();
      table.string('name');
    }),
    knex.schema.createTable('sessions', table => {
      table.increments();
      table.integer('learner_id').references('id').inTable('learners');
      table.integer('teacher_id').references('id').inTable('teachers');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.integer('duration').unsigned().comment('duration of session in milliseconds');
      table.string('transcription_location');
      table.integer('learner_rating');
      table.integer('teacher_rating');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('learners'),
    knex.schema.dropTable('teachers'),
    knex.schema.dropTable('languages'),
    knex.schema.dropTable('sessions')
  ]);
};
