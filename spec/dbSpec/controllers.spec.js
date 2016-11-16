process.env.NODE_ENV = 'test';

const knex = require('../../db/index.js');
const controllers = require('../../db/controllers/controllers.js');
const expect = require('chai').expect;

describe('Database Tests', () => {
  beforeEach(done => {
    knex.migrate.rollback()
      .then(() => {
        return knex.migrate.latest();
      })
      .then(() => {
        return knex.seed.run();
      })
      .then(() => {
        done();
      });
  });

  afterEach(done => {
    knex.migrate.rollback()
      .then(() => {
        done();
      });
  });

  describe('controllers', () => {
    it('should add one user', done => {
      controllers.addUser('Omar', 'omar@test.com', 'thisisafacebookid')
        .then(response => {
          return knex('users').select().where({id: Number(response)});
        })
        .then(response => {
          expect(response.length).to.equal(1);
          expect(response[0].full_name).to.equal('Omar');
          expect(response[0].email).to.equal('omar@test.com');
          expect(response[0].facebook_id).to.equal('thisisafacebookid');
          done();
        });
    });

    it('should add a learner', done => {
      var learner;
      controllers.addLearner('Test\'s facebook_id', 'English', 'Beginner')
        .then(response => {
          return knex('learners').select().where({id: Number(response[0])});
        })
        .then(learnerArr => {
          expect(learnerArr.length).to.equal(1);
          learner = learnerArr[0];
          expect(learner.user_id).to.equal(1);
          return knex('languages').select().where({id: learner.language_id});
        })
        .then(languageArr => {
          expect(languageArr[0].name).to.equal('English');
          return knex('levels').select().where({id: learner.level_id});
        })
        .then(levelArr => {
          expect(levelArr[0].name).to.equal('Beginner');
          done();
        });
    });

    it('should add a teacher', done => {
      var teacher;
      controllers.addTeacher('Test\'s facebook_id', 'Spanish')
        .then(response => {
          return knex('teachers').select().where({id: Number(response[0])});
        })
        .then(teacherArr => {
          expect(teacherArr.length).to.equal(1);
          teacher = teacherArr[0];
          expect(teacher.user_id).to.equal(1);
          return knex('languages').select().where({id: teacher.language_id});
        })
        .then(languageArr => {
          expect(languageArr[0].name).to.equal('Spanish');
          done();
        });
    });

  });
});
