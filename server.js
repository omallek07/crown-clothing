const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/* Native to Node.  Lets us build out pathing for our directories */
const path = require('path');

/* Loads .env into environment */
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

/* Process BODY in requests and convert to JSON */
app.use(bodyParser.json());

/* URL strings stripped of spaces and symbols */
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});


