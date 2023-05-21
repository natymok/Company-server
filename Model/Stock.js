const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    companyName:{
        type:String,
       
    
    },
    stockName:{
        type:String,
        unique:true,
        trim:true,
    
    },
    Description:{
        type:String,
      
    

    },
    amount:{
        type:Number,

    
       
        lowercase:true


    },
    price:{
        type:String,
   

    },
  

   
}, {timestamps:true})
module.exports=mongoose.model('Stock',userSchema)