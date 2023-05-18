const  otpModel=require('../../Model/Otp')
const bcrypt=require('bcrypt')
const user=require('../../Model/user')
exports.newPass=(req,res)=>{
    otpModel.findOne({userEmail:req.body.email})
    .then((data)=>{
        if(data){
            if(data.expiresAt < Date.now()){
                otpModel.findOneAndDelete({userEmail:req.body.email}).then((data)=>{
                    if(data){
                        res.status(400).json({
                            error:"otp expired resend again"
                          })
                    }
                })
              
            }
          else{
            if(data.authenticate(req.body.otp)){
                 bcrypt.genSalt(10,((err,salt)=>{
                    if(salt)
                    {
                        bcrypt.hash(req.body.newpassword,salt,((err,hash)=>{
                            if(hash){
                                user.findOneAndUpdate({email:req.body.email},{password:hash},{new:true})
                                .then((data)=>{
                                    if(data){
                                        otpModel.findOneAndDelete({userEmail:req.body.email}).then(()=>{
                                            res.status(200).json({
                                                message:'password changed sucessfully'
                                            })
                                        })
                                        .catch((err)=>{
                
                                            res.status(400).json({
                                                error:'something went wrong'
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
                                        error:'something went wrong'
                                    })
                                     
                                })
                            }
                            else{
                                res.status(400).json({
                                    error:'hash error'
                                })
                            }
                        }))
                    }
                    else{
                        res.status(400).json({
                            error:'somthing wrong salt'
                        })
                    }

                 }))
            }
            else{
                res.status(400).json({
                    error:'incorrect otp'
                })
            }

          }
        }
        else{
            res.status(400).json({
                error:'something went wrong'
            })  
        }
    })
   

}