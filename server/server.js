const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const recordCollection = require('./modules/record-collection');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/records', (req, res) => {
  res.send(recordCollection);
});

app.post('/add-record', (req, res) => {
  recordCollection.push(req.body);
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`sever.js is running on port ${PORT}`);
});
