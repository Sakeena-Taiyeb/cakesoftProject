// todo.route.js

const express = require('express');
const app = express();
const todoRoutes = express.Router();

// Require Todo model in our routes module
let Todo = require('../models/todo.model');

// Defined store route
todoRoutes.route('/add').post(function (req, res) {
  let newTodo = new Todo(req.body);
  newTodo.status='status';
  newTodo.date=new Date();
  newTodo.save()
    .then(game => {
    res.status(200).json({'Todo': 'Todo in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


// Defined get data(index or listing) route
todoRoutes.get('/',(req,res,next)=>{
  //mongodb method to get all data
Todo.find(function(err,todos){
      if(err){
          res.json(err);
      }
      else
      {
          res.json(todos);
      }
  });
  });


// Defined edit route
todoRoutes.route('/edit/:id').get(function (req, res,next) {
  let id = req.params.id;
  Todo.findById(id, function (err, todo){
      res.json(todo);
  });
});


//  Defined update route
todoRoutes.put('/update/:id',(req,res,next)=>{
    Todo.findOneAndUpdate({_id:req.params.id},{ $set:{
title : req.body.title,
description : req.body.description,
status : req.body.status,
date:req.body.date

}
    }, function(err,result){
        if(err){
   
            res.json(err);
        }
        else { 
            res.json(result);
        }
      }
    )
  });   


//Defined delete | remove | destroy route
todoRoutes.delete('/delete/:id',(req,res,next)=>{
  Todo.findOneAndDelete({_id:req.params.id},
      function(err,result){
          if(err){
              res.json(err);
          }
          else{
          res.json('Deleted');
      }
      
});
});

module.exports = todoRoutes;
