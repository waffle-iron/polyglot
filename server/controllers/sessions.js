const express = require('express');
const router = express.Router();

router.post('/:language', (req, res) => {
  // add in additional logic
  res.sendStatus(200);
});

module.exports = router;
