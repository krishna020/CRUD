//const { json } = require('express');
const express=require('express')
const app=express();
const studentRout=require('../routes/student')
const facultyRout=require('../routes/faculty')
const bodyparser=require('body-parser')
require('../config/conn')

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use('/student',studentRout)
app.use('/faculty',facultyRout)

// app.use((req,res,next)=>
// {
//    res.status(200).json({
//     message:'i am from server'
//    })
// })

app.use((req,res,next)=>
{
   res.status(404).json({
      message:'Bad request'
   })
})

module.exports=app;