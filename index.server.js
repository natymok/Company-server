const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const userRoute=require('./Routes/userRoutes')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://natymok:naty1010mok@cluster0.tujeepg.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true ,      useUnifiedTopology: true,}).
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

app.listen(3000,()=>{
  console.log('server listineang on port 3000')
})

