const db = require('../index.js');

module.exports = (email) => {
  return db('users').select().where({email: email});
};
