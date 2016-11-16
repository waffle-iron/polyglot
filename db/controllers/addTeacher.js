const db = require('../index.js');

module.exports = (facebookId, languageName) => {
  let user;
  return db('users').select().where({facebook_id: facebookId})
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
