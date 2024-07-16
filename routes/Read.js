'use strict';
const express=require('express'); //call library express
const crypto=require('crypto'); //call library crypto
const readRoute=express.Router();
const connection=require('../db');


readRoute.get('/std',function(req,res,next){
    connection.execute('SELECT * FROM std_tbl;')
      .then((result)=>{
          var rawData = result[0];
          // res.send(JSON.stringify(rawData));
          res.send(rawData);
      }).catch((err)=>{
          console.log(err);
          res.end();
      })
  
  });

  module.exports = readRoute;