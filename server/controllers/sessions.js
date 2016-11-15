const express = require('express');
const router = express.Router();
const getPartner = require('../models/sessions').getPartner;

router.post('/:language', (req, res) => {
  let resId = getPartner(req.body.user_id, req.params.language, req.body.teacher)
  res.status(200).json(resId);
});

module.exports = router;
