const addUser = require('./addUser.js');
const addLearner = require('./addLearner.js');
const addTeacher = require('./addTeacher.js');
const updateLearner = require('./updateLearner.js');
const findUserByEmail = require('./findUserByEmail.js');
const getLearningLanguages = require('./getLearningLanguages.js');
const getTeachingLanguages = require('./getTeachingLanguages.js');
const findAllLanguages = require('./findAllLanguages.js');
const addCard = require('./addCard.js');
const updateCard = require('./updateCard.js');
const getCards = require('./getCards.js');

module.exports = {
  addUser: addUser,
  addLearner: addLearner,
  addTeacher: addTeacher,
  updateLearner: updateLearner,
  findUserByEmail: findUserByEmail,
  findAllLanguages: findAllLanguages,
  getLearningLanguages: getLearningLanguages,
  getTeachingLanguages: getTeachingLanguages,
  addCard: addCard,
  updateCard: updateCard,
  getCards: getCards
};
