const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const Author = require('../models/User');

router.route('/')
  .get((req, res) =>{
    Blog
      .findAll()
      .then(blogs => {
        res.status(200).send(blogs);
      }) 
  })
