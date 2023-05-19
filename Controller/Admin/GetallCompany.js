const company=require('../../Model/Company') 
exports.getallCompany=(req,res)=>{
    company.find({}).then((data)=>{
      if(data){
        res.status(200).json({message:data})
      }
    })
    .catch((err)=>{
        res.status(400).json({error:err})
    })

}