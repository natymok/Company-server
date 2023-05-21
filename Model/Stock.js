const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    companyName:{
        type:String,
        unique:true,
        trim:true,
    
    },
    stockName:{
        type:String,
        unique:true,
        trim:true,
    
    },
    Description:{
        type:String,
      
        trim:true

    },
    amount:{
        type:String,

        trim:true,
       
        lowercase:true


    },
    price:{
        type:String,
   

    },
  

   
}, {timestamps:true})
module.exports=mongoose.model('Stock',userSchema)