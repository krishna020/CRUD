const mongoose=require('mongoose')
require('validator')

const studentScema=new mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
    },
    rollNo:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Student',studentScema);