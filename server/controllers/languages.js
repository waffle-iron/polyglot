const express = require('express');
const router = express.Router();
const db = require('../../db/controllers/controllers.js');

router.get('/', (req, res) => {
  console.log('in here$$$$');
  db.findAllLanguages()
  .then((languages) => {
    res.send(languages);
  })
  .catch((err)=> {
    console.log(err);
  });  
});

router.post('/', (req, res) => {
  // add in additonal logic
  res.sendStatus(200);
});

module.exports = router;