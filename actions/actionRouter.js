const express = require('express');

const db = require('../data/helpers/actionModel');

const router = express.Router();

// GET request
router.get('', (req, res) => {
  db.get(req.query)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(error => {
    res.status(500).json({ error: 'The actions information could not be retrieved. ' + error.message })
  })
});

module.exports = router;