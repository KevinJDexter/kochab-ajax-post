const express = require('express');

const app = express();
const PORT = 5000;

const recordCollection = require('./modules/record-collection');

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log(`sever.js is running on port ${PORT}`);
});

app.get('/records', (req, res) => {
  res.send(recordCollection);
})
