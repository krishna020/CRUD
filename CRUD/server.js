const express=require('express');
const app = require('./controller/app');
const ap=express();
const PORT=process.env.PORT ||3000
ap.use(app)

ap.listen(PORT,()=>
{
    console.log('app is listening on '+PORT)
}) 