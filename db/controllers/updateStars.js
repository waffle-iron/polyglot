const db = require('../index.js');

module.exports = (email, change) => {
  return new Promise((resolve, reject) => {
    db('users').where({email: email})
      .increment('stars', change)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};
