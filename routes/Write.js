'use strict';
const express=require('express'); //call library express
const crypto=require('crypto'); //call library crypto
const writeRoute=express.Router();
const connection=require('../db');

writeRoute.post('/std',function(req,res,next){
    connection.execute(`INSERT INTO std_tbl 
        (std_id , Prefix, std_Fname, std_Lname, std_Nickname, std_religion, major, std_tel) VALUES (?,?,?,?,?,?,?,?);`,
        [req.body.std_id, req.body.Prefix, req.body.std_Fname, req.body.std_Lname, req.body.std_Nickname, req.body.std_religion, req.body.major, req.body.std_tel]).then(()=>{
            console.log('ok');
            res.status(201).send("Insert Successfully");
        }).catch((err)=>{
            console.log(err);
            res.end();
        });
});


writeRoute.use('/',function(req,res,next){
    res.sendStatus(404);
})

module.exports = writeRoute;