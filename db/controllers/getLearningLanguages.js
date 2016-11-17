const db = require('../index.js');

module.exports = (email) => {
  return new Promise((resolve, reject) => {
    db('users').select().where({email: email})
      .then(response => {
        return db('learners').select('language_id').where({user_id: response[0].id});
      })
      .then(response => {
        return Promise.all(response.map(lang => {
          return db('languages').select('name').where({id: lang.language_id});
        }));
      })
      .then(response => {
        resolve(response.map(lang => {
          return lang[0].name;
        }));
      });
  });
};
