const express = require('express');
const router = express.Router();
const Blog = require('./models/blog.js');
const Author = require('./models/author.js');


router.route('/')

// GET all Authors
  .get((req, res) =>{
    Author
      .findAll()
      .then(authors => {
        res.status(200).send(authors);
      })
  })