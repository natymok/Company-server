const newcompany=require('../../Model/newCompany')
exports.DeclineSignup=(req,res)=>{
    newcompany.findOneAndDelete({CompanyName:req.body.CompanyName},((err,data)=>{
        if(data){
            res.status(200).json({
                message:data
            })
    
        }
        if(err){
            res.status(400).json({
                error:err
            })

        }

    }))
       
    
      

}
