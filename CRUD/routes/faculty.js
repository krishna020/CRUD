const express=require('express')
const router=express.Router();

router.get('/',(req,res)=>
{
    res.json({
        message:'i am  faculty get method'
    })
})

router.post('/',(req,res)=>
{
    res.json(req.body)
})

module.exports=router;