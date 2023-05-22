const company=require('../../Model/Company')
const newCompany = require('../../Model/newCompany')
exports.Acceptsignup=(req,res)=>{
    
    const _company=new company({
        ...req.body
      })
      _company.save().then((_data)=>{
        if(_data){
            newCompany.findOneAndDelete({companyName:req.body.companyName}).then((data)=>{
                if(data){
                    res.status(200).json({
                        message:_data
                    })

                }
            })
            .catch((err)=>{
                res.status(400).json({
                    error:err
                })
              })
           
        }
        else{
            res.status(400).json({
                error:'something went wrong'
            })

        }
      })
      .catch((err)=>{
        res.status(400).json({
            error:err
        })
      })
}