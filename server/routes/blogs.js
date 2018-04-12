const express = require('express');
const router = express.Router();
const db = require('../db/models');

router.route('/')
  .get((req, res) =>{
    db.Blog
      .findAll()
      .then(blogs => {
        res.status(200).send(blogs);
      }) 
  })
  
  .post((req, res) => {
    req.body.AuthorId = req.query.authorId;
    db.Blog
      .create(req.body)
      .then((createdBlog, err) =>{
        if(createdBlog){
          res.status(201).json(createdBlog)
        } else{res.status(404).send(err)}
      })  
  })
  router.route('/featured')
    .get((req, res) => {
      db.Blog
        .findAll({where: {"featured": true}})
        .then(result => {
          res.status(200).send(result);
        })
    })

  router.route('/:id')
    .get((req, res) => {
      console.log('author id => ' + req.param("id"))
      db.Blog
        .findById(req.params.id)
        .then(result => {
          if(result){
          return res.status(200).send(result);
        } else {
          return res.status(404).send();
        }
        })
    })

    .put((req, res) => {
      db.Blog
        .update(req.body, {where:{id:{$eq: req.params.id}}})
        .then(updatedBlog => {
          res.status(204).send(updatedBlog);
        })
    })

    .delete((req, res, next)=> {
      db.Blog
        .findById(req.params.id)
        .then(( blogToBeDeleted) => {
          if (blogToBeDeleted) {
          blogToBeDeleted.destroy();
          } else{res.status(404).send()}
        })
        .then(res.send());
    })



  module.exports = router;