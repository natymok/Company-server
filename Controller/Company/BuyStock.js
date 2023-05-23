
const company=require('../../Model/Company')
const purchasedStock=require("../../Model/PurchasedStock")
const stock=require('../../Model/Stock')
exports.buyStock=(req,res)=>{

    const info={stockName:req.body.stockName,username:req.body.username,amount:req.body.amount,price:req.body.price}
    stock.findOne({companyName:req.body.companyName}).then((data)=>{
       if(data){
              if(  parseInt(req.body.price) == parseInt(req.body.amount )* parseInt(data.price)){
                        const customerinfo={userName:req.body.username,companyName:req.body.companyName,price:parseInt(req.body.amount )* parseInt(data.price),amount:req.body.amount,stockName:req.body.stockName
                        }
                  const totalsell=data.totalsell + req.body.price
                  const remainingStock=data.amount - req.body.amount
                
                  const _purchasedStock=new purchasedStock ({                                                                                                                                                                                                                      
                      ...customerinfo
                             })
                        _purchasedStock.save() .then(()=>{
                            stock.findOneAndUpdate({companyName:req.body.companyName},{totalsell:totalsell,amount:remainingStock},{new:true})
                            .then((data)=>{
                                if(data){
                                    res.status(200).json({
                                        message:"you have sucessfully buy stock"
                                    })

                                }
                            })
                          
            
    
                        })
                        
                   
                    
                        
                    }
                    else{
                        res.status(400).json({
                            error:"something went wrong"
                        })
                    }
                
               

        
            
           

           
        
       }
    })
  
 

  

}