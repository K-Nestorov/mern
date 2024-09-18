
const bcrypt=require('bcryptjs');
const jwd=require('jsonwebtoken');
const User=require('../../models/User');
//register
const registerUser=async(req,res)=>{
    const {userName,email,password}=req.body;

    try{

const hashPassword=await bcrypt.hash(password,12);
const newUser=new User({
    userName,email,password:hashPassword,
})
await new User.save()
res.status(200).json({
    success:true,
    message:"Success registration"
})
    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"error occured",
        });
    }
};



//login
const login=async(req,res)=>{
    const {userName,email,password}=req.body;

    try{

    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"error occured",
        });
    }
};

//logout



//auth middleware

module.exports={registerUser};