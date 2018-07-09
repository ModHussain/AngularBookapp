var express = require('express');

var router = express.Router();

var db=require("../db.js")

//ROUTE 1
router.route('/')

//CREATE
      .post(function(req,res){
        var book = new db.Book(req.body);
        book.save(function(err,book){
          if(err)
          res.status(500).json('INTERNAL SERVER ERROR');
          res.status(200).json(book);
        })
      })

//READ
      .get(function(req,res){
        db.Book.find(function(err,books){
          if (err)
          res.status(500).json('INTERNAL SERVER ERROR');
          res.status(200).json(books);
        })
      })

//ROUTE 2
router.route('/:book_id')

//READ
    .get(function(req,res){
      db.Book.find(
      {_id:req.params.book_id},function(err,book){
       if (err)
       res.status(500).json('INTERNAL SERVER ERROR');
       res.status(200).json(book);
      })
     })

//UPDATE

      .put(function(req,res){
        db.Book.findById(req.params.book_id, function(err,book){
          if(err)
          res.status(500).json('INVALID SERVER ERROR');
          book.title = req.body.title; 
          book.genre = req.body.genre;
          book.description = req.body.description;
          book.author = req.body.author; 
          book.publisher = req.body.publisher; 
          book.pages = req.body.pages;       
          book.save(function(err,book){
            if(err)
            res.status(500).json('book INVALID SERVER ERROR');
            res.status(200).json(book);
          })
        })
      })

//DELETE
      .delete(function(req,res){
        db.Book.remove(
          {_id:req.params.book_id}, function(err){
            if(err)
            res.status(500).json('INTERNAL SERVER ERROR');
          }
        );
      });

module.exports = router;
