const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const newCompanychema=new mongoose.Schema({
    CompanyName:{
         type:String,
        required:true,
        trim:true},

    CompanyEmail:{
            type:String,
           required:true,
           trim:true},
   
    password:{
         type:String,
         required:true,
         trim:true},


   
}, {timestamps:true})
module.exports=mongoose.model('newCompany',newCompanychema)