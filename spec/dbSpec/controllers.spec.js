process.env.NODE_ENV = 'test';

const db = require('../../db/index.js');
const controllers = require('../../db/controllers/controllers.js');
const expect = require('chai').expect;

describe('Database Tests', () => {
  beforeEach(done => {
    db.migrate.rollback()
      .then(() => {
        return db.migrate.latest();
      })
      .then(() => {
        return db.seed.run();
      })
      .then(() => {
        done();
      });
  });

  afterEach(done => {
    db.migrate.rollback()
      .then(() => {
        done();
      });
  });

  describe('controllers', () => {
    it('should find a user by email', done => {
      controllers.findUserByEmail('test@test.com')
        .then(response => {
          var user = response[0];
          expect(response.length).to.equal(1);
          expect(response[0].full_name).to.equal('Test McTesterson');
          expect(response[0].email).to.equal('test@test.com');
          expect(response[0].facebook_id).to.equal('Test\'s facebook_id');
          done();
        });
    });

    it('should add one user', done => {
      controllers.addUser('Omar', 'omar@test.com', 'thisisafacebookid')
        .then(response => {
          return db('users').select().where({id: Number(response)});
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
      controllers.addLearner('test@test.com', 'English', 'Beginner')
        .then(response => {
          return db('learners').select().where({id: Number(response[0])});
        })
        .then(learnerArr => {
          expect(learnerArr.length).to.equal(1);
          learner = learnerArr[0];
          expect(learner.user_id).to.equal(1);
          return db('languages').select().where({id: learner.language_id});
        })
        .then(languageArr => {
          expect(languageArr[0].name).to.equal('English');
          return db('levels').select().where({id: learner.level_id});
        })
        .then(levelArr => {
          expect(levelArr[0].name).to.equal('Beginner');
          done();
        });
    });

    it('should add a teacher', done => {
      var teacher;
      controllers.addTeacher('test@test.com', 'Spanish')
        .then(response => {
          return db('teachers').select().where({id: Number(response[0])});
        })
        .then(teacherArr => {
          expect(teacherArr.length).to.equal(1);
          teacher = teacherArr[0];
          expect(teacher.user_id).to.equal(1);
          return db('languages').select().where({id: teacher.language_id});
        })
        .then(languageArr => {
          expect(languageArr[0].name).to.equal('Spanish');
          done();
        });
    });
    it('should update a learner', done => {
      var learnerId;
      controllers.addLearner('test@test.com', 'English', 'Beginner')
        .then(response => {
          learnerId = response[0];
          return controllers.updateLearner(learnerId, 'Intermediate');
        })
        .then(emptyResponse => {
          return db('learners').select().where({id: learnerId});
        })
        .then(learnerArr => {
          return db('levels').select().where({id: learnerArr[0].level_id});
        })
        .then(levelArr => {
          expect(levelArr[0].name).to.equal('Intermediate');
          done();
        });
    });
  });
});
