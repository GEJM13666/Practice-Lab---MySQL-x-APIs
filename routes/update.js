'use strict';
const express=require('express'); //call library express
const upRoute=express.Router();
const connection=require('../db');

upRoute.put('/std/:stdid',function(req,res,next){
    connection.execute("UPDATE std_tbl SET std_Fname=?,std_Lname=?,std_Nickname=? WHERE std_id =?;",
        [req.body.std_Fname, req.body.std_Lname, req.body.std_Nickname, req.params.stdid]).then(()=>{
            console.log('ok');
        }).catch((err)=>{
            console.log(err);
            
    console.log(req.body);
        });
        res.status(200).send("Update Successfully.");

});


upRoute.use('/',function(req,res,next){
    res.sendStatus(404);

})




module.exports = upRoute;