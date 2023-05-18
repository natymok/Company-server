const PurchasedStock=require('../../Model/PurchasedStock')
exports.getStockPrice=(req,res)=>{


        PurchasedStock.find({CompanyName:req.body.CompanyName}).then((data)=>{
          if(data){
          
            let total=0
            let amount=0
            data.map((item)=>{
            
              amount=parseInt(item.amount) + amount
               total=parseInt(item.price) + total
              
              
               

            })
            res.status(200).json({
              message:total,
              amount:amount,
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