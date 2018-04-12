const express = require ('express');
const morgan = require ('morgan');
const bodyParser = require ('body-parser');
const sequelize = require('sequelize');
const db = require('./db/models');

//sequelize configuration
db.sequelize.sync(); //this creates the tables in the database


const app = express();
app.use(bodyParser.json()) //for parsing application/json
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).send();
});

app.use('/api/authors', require('./routes/authors'));
app.use('/api/blogs', require('./routes/blogs'));

module.exports = app;