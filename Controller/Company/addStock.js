const company=require('../../Model/Company')
const stock=require('../../Model/Stock')
exports.addStock=(req,res)=>{
  const info={stockName:req.body.stockName,Description:req.body.Description,amount:req.body.amount,price:req.body.price}
  const stock=[{...info}]
  company.findOneAndUpdate({CompanyName:req.body.CompanyName},{Stock:stock},{new:true}).then((data)=>{
    if(data){
      res.status(200).json({
        message:data
      })
    }
    res.status(400).json({
      message:'rong'
    })
  
  
  })
  .catch((err)=>{
    res.status(400).json({
      error:err
    })
  })

}