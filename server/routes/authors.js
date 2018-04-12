const express = require('express');
const router = express.Router();
const db = require('../db/models');


router.route('/')

// GET all Authors
  .get((req, res) =>{
    db.Author
      .findAll()
      .then(authors => {
        res.status(200).send(authors);
      });
  })

  .post((req, res) => {
    db.Author
      .create(req.body)
      .then( newAuthor => {
        res.status(201).send(newAuthor);
      });
  })

router.route('/:id')
  .get((req, res) => {
    db.Author
      .findById(req.params.id)
      .then(returnedAuthor => {
        if(returnedAuthor){
        res.status(200).send(returnedAuthor);
      }else{
        res.status(404).send();
      }
      });
  })

  .put((req, res) => {
    db.Author
      .update(req.body, {where: {id: {$eq: req.params.id}}})
      .then(updatedAuthor => {
        res.status(204).send(updatedAuthor);
      })
      .catch(function(err) {
        // print the error details
        console.log(err, req.body);
    });
  })
  .delete((req, res, next) => {
    db.Author
      .destroy({where:{id:{$eq: req.params.id}}})
      // .findById(req.params.id)
      // .then(result => {
      //   result.destroy()
      // })
      .then(res.send());
  })

router.route('/:id/blogs')
  .get((req, res) => {
    db.Blog 
      .findAll({where: {AuthorId: req.params.id}})
      .then(result =>{
        res.send(result);
      })
  })

module.exports = router;