
const express=require('express')
const { registerUser,loginUser,logOutUser,authMidlleware }=require('../../controllers/auth/auth-controller')
const router=express.Router();
router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/check-auth',authMidlleware,(req,res)=>{
    const user=req.user;
    res.status(200).json({
        success:true,
        message:'Authenticated user',user
    });
    
});
module.exports=router;