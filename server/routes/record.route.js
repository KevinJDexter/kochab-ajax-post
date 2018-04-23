const express = require('express');
const router = express.Router();

const recordCollection = require('../modules/record-collection');

router.get('/', (req, res) => {
  res.send(recordCollection);
});

router.post('/add', (req, res) => {
  recordCollection.push(req.body);
  console.log(req.body);
  res.sendStatus(200);
});

module.exports = router;