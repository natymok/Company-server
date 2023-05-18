
const company=require('../../Model/Company')
const purchasedStock=require("../../Model/PurchasedStock")
exports.buyStock=(req,res)=>{

    const info={stockName:req.body.stockName,username:req.body.username,amount:req.body.amount,price:req.body.price}
    company.findOne({CompanyName:req.body.CompanyName}).then((data)=>{
       if(data){
        if(data.Stock){
            data.Stock.map((item)=>{
             
                if(req.body.stockName==item.stockName){
                    if(parseInt(req.body.price) == parseInt(req.body.amount )* parseInt(item.price)){
                        const customerinfo={userName:req.body.username,CompanyName:req.body.CompanyName,price:parseInt(req.body.amount )* parseInt(item.price),amount:req.body.amount,stockName:req.body.stockName
                        }

                  const _purchasedStock=new purchasedStock ({
                      ...customerinfo
                             })
                        _purchasedStock.save() .then(()=>{
                            res.status(200).json({
                                message:"you have sucessfully buy stock"
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
       }
    })
  
 

  

}