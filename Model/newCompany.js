const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const newCompanychema=new mongoose.Schema({
    companyName:{
         type:String,
        required:true,
        trim:true},

    companyEmail:{
            type:String,
           required:true,
           trim:true},
   
    password:{
         type:String,
         required:true,
         trim:true},


         verified:{
            type:Boolean,
            default:false
        },


   
}, {timestamps:true})
newCompanychema.pre('save',async function(next){
    const salt= await bcrypt.genSalt(10)
    this.password= await bcrypt.hash(this.password,salt)
    next()


})
newCompanychema.method({
    authenticate:function(userpassword){
        return bcrypt.compareSync(userpassword,this.password)},
})
module.exports=mongoose.model('newCompany',newCompanychema)