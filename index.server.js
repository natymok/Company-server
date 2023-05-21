const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const userRoute=require('./Routes/userRoutes')
const cors=require('cors')
require('dotenv').config()
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true ,      useUnifiedTopology: true,}).
then((data,err)=>{
  if(data){
   
      console.log('connected sucessfully')
       
  
  }
  if(err){
    console.log(err)
  }
})
app.use(bodyParser.json({limit: '50mb'}))
app.use('/api',userRoute)
app.use(cors())
if(process.env.NODE_ENV=='production')
{   console.log('production mode active')
   
}
else{
  console.log('devv mode')
  app.get('/',((req,res)=>{
      res.send('api running')
  }))
}

app.listen(process.env.PORT || 3000,()=>{
  console.log('server listineang on port 3000')
})

