'use strict';

const express = require('express');
const router = express.Router();
// const getPartner = require('../models/sessions').getPartner;

let langsAndIds = {
  teachers: {},
  students: {}
};

const gP = (id, language, teacher) => {
  console.log('Queue object', langsAndIds);
  if (teacher === true) {
    console.log('TEACHER!!!!');
    langsAndIds.students[language] = langsAndIds.students[language] || [];
    if (langsAndIds.students[language].length > 0) {
      return langsAndIds.students[language].shift();
    } else {
      langsAndIds.teachers[language] = langsAndIds.teachers[language] || [];
      langsAndIds.teachers[language].push(id);
      return 'OK';
    }
  } else {
    console.log('STUDENT!!!!');
    langsAndIds.teachers[language] = langsAndIds.teachers[language] || [];
    if (langsAndIds.teachers[language].length > 0) {
      return langsAndIds.teachers[language].shift();
    } else {
      langsAndIds.students[language] = langsAndIds.students[language] || [];
      langsAndIds.students[language].push(id);
      return 'OK';
    }
  }
};


router.post('/:language', (req, res) => {
  let resId = gP(req.body.userId, req.params.language, JSON.parse(req.body.teacher));
  console.log('OBJECT', langsAndIds);
  console.log('Teacher: ', req.body.teacher, ' Language: ', req.params.language, ' ID: ', req.body.userId, ' Resp: ', resId );
  console.log('ID TYPE', typeof resId); 
  res.status(200).json(resId);
});

module.exports = router;
