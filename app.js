const express=require('express');
const app=express();
const PORT=process.env.PORT||3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Write=require('./routes/Write');
const Read=require('./routes/Read');
const Update=require('./routes/update');
const Delete=require('./routes/Delete');

app.use('/create',Write);
app.use('/read',Read);
app.use('/update',Update);
app.use('/delete',Delete);

app.use('/',function(req,res,next){
    res.sendStatus(404);
});

app.listen(PORT,()=>
    console.log('Server running on port:'+PORT)
);