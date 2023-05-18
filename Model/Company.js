const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const userSchema=new mongoose.Schema({
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


    Stock:[
        { 

            stockName:{
                type:String,
           
                trim:true,
            
            },
            Description:{
                type:String,
               
                trim:true
        
            },
            amount:{
                type:String,
            
                trim:true,
              
               
        
        
            },
            price:{
                type:String,
                
        
            },
           
          

    }],

   
   

   
}, {timestamps:true})
module.exports=mongoose.model('Company',userSchema)