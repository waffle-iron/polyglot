const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // add in additional logic
  console.log('****************', req);
  res.sendStatus(200);
});

router.post('/', (req, res) => {
  // add in additonal logic
  res.sendStatus(200);
});

module.exports = router;
