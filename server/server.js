const express = require('express');
const bodyParser = require('body-parser');

const recordRouter = require('./routes/record.route');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/record', recordRouter);

app.listen(PORT, () => {
  console.log(`sever.js is running on port ${PORT}`);
});
