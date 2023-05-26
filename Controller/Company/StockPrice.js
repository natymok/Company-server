const PurchasedStock=require('../../Model/PurchasedStock')
exports.getStockPrice=(req,res)=>{


        PurchasedStock.find({companyName:req.body.companyName}).then((data)=>{
          if(data){
          
            let total=0
         
            data.map((item)=>{
          
               total=parseInt(item.price) + total
              
              
               

            })
            res.status(200).json({
              message:total,
             
              customers:data.length



            })
         
          
          }
        })
        .catch((err)=>{
            res.status(400).json({
                error:err
            })
          })
  

}