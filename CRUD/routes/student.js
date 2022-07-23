const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')

const Student=require('../model/schema')

router.get('/',(req,res)=>
{
    Student.find().then((result)=>
    {
        res.status(200).json({stData:result})
    }).catch((err)=>
    {
        res.status(401).json({re:err})
    })
})

router.get('/:id',(req,res)=>
{
    Student.findById(req.params.id).then((result)=>
    {
        res.status(200).json({name:result})
    }).catch(err=>
        {
            res.json({er:err})
        })

})



//delete the document

router.delete('/:id',(req,res,next)=>
{    
    //const _id=req.params.id;
     Student.deleteOne({id:req.params.id}).then((result)=>
     {
        res.status(200).json({data:result})
     }).catch((err)=>
     {
        res.status(401).json({er:err})
     })
})

//updated the code.

router.put('/:id',(req,res,next)=>
{

    console.log(req.params.id)
    Student.updateOne({id:req.params.id},{$set:{
        name:req.body.name,
        rollNo:req.body.rollNo,
        email:req.body.email,
        branch:req.body.branch

    }}).then((result)=>
    {
        res.status(200).json({data:result})
    }).catch((err)=>
    {
        res.status(401).json({error:err})
    })

    })


router.post('/',(req,res,next)=>
{
    const student=new Student({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        rollNo:req.body.rollNo,
        email:req.body.email,
        branch:req.body.branch
    })

    student.save().then((result)=>
    {
        res.json({newStudent:result})
}).catch((err)=>
{
    console.log(err)
})



//updated the code.

// router.put('/:id',(req,res,next)=>
// {
//     console.log(req.params.id)
// })

 })



module.exports=router;