const db = require('../index.js');

module.exports = (email, languageName, skillLevel) => {
  let user;
  let language;
  return db('users').select().where({email: email})
    .then(userArr => {
      user = userArr[0];
      return db('languages').select().where({name: languageName});
    })
    .then(languageArr => {
      language = languageArr[0];
      return db('levels').select().where({name: skillLevel});
    })
    .then(levelArr => {
      return db('learners').insert({
        user_id: user.id,
        language_id: language.id,
        level_id: levelArr[0].id
      }, 'id');
    });

};
