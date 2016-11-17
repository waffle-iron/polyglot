const db = require('../index.js');

module.exports = (email, languageName) => {
  let user;
  return db('users').select().where({email: email})
    .then(userArr => {
      user = userArr[0];
      return db('languages').select().where({name: languageName});
    })
    .then(languagesArr => {
      return db('teachers').insert({
        user_id: user.id,
        language_id: languagesArr[0].id,
      }, 'id');
    });

};
