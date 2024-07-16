'use strict';
const express=require('express'); //call library express
const crypto=require('crypto'); //call library crypto
const deleteRoute=express.Router();
const connection=require('../db');





deleteRoute.delete('/std/:stdid',function(req,res,next){
    connection.execute("DELETE FROM std_tbl WHERE std_id=?;",
        [req.params.stdid]).then(()=>{
            console.log('ok');
        }).catch((err)=>{
            console.log(err);
        });
        res.end();

});



module.exports = deleteRoute;