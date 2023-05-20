const express=require('express')
const router=express.Router()
const{validateRequest,validatesigninRequest,isValidatedRequest}=require('../validate/validate')
const {verifyOtp}=require('../Controller/VerfifyOtp')
const {signup}=require('../Controller/Signup')
const {resendOtp}=require('../Controller/ResendOtP')
const {Signin}=require('../Controller/Signin')
const{otpsend}=require('../Controller/ForgotPassword/sendOtP')
const{newPass}=require('../Controller/ForgotPassword/newPass')
const {addStock}=require('../Controller/Company/addStock')
const {editStock}=require('../Controller/Company/updateStock')
const {buyStock}=require('../Controller/Company/BuyStock')
const {companySignin}=require('../Controller/Company/Signin')
const {getStockPrice}=require('../Controller/Company/StockPrice')
const {DeleteStock}=require('../Controller/Company/DeleteStock')
const {topBuy}=require('../Controller/Company/TopBuy')
const {Acceptsignup}=require('../Controller/Admin/AcceptSignup')
const {companySignup}=require('../Controller/Company/Signup')
const {getallCompany}=require('../Controller/Admin/GetallCompany')
const {getnewCompany}=require('../Controller/Admin/getNewCompany')
const {DeclineSignup}=require('../Controller/Admin/DeclineSignup')
router.post('/Signup',validateRequest,isValidatedRequest,signup)
router.post('/Signin',validatesigninRequest,isValidatedRequest,Signin)
router.post('/Verifyotp',verifyOtp)
router.post('/resendOtp',resendOtp)
router.post('/forgotpass/sendotp',otpsend)
router.post('/forgotpass/create_new',newPass)
router.post('/addStock',addStock)
router.post('/editStock',editStock)
router.post('/delete',DeleteStock)
router.post('/company/signin',companySignin)
router.post('/company/signup',companySignup)
router.post('/buyStock',buyStock)
router.post('/getTotalstock',getStockPrice)
router.post('/admin/acceptsignup',Acceptsignup)
router.post('/admin/Declinesignup',DeclineSignup)
router.get('/admin/getNewCompany',getnewCompany)
router.post('/topbuy',topBuy)
router.get('/getCompany',getallCompany)
module.exports=router

