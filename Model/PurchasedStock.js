const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    CompanyName:{
        type:String,
        
        trim:true,
    
    },
    userName:{
        type:String,
        unique:true,
        trim:true,
    
    },
    stockName:{
        type:String,
        
        trim:true,
    
    },
   
    amount:{
        type:String,

    

    },
    price:{
        type:String,
   

    },
  

   
}, {timestamps:true})
module.exports=mongoose.model('purchasedStock',userSchema)