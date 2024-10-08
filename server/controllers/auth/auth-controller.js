const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

//register
const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        const checkUser=await User.findOne({email});
        if(checkUser)return res.json({success:false,message:"User already exist with this email"});
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            userName,
            email,
            password: hashPassword,
        });
        await newUser.save();  // Corrected this line
        res.status(200).json({
            success: true,
            message: "Success registration"
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "error occurred",
        });
    }
};

//login

const loginUser = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        const checkUser=await User.findOne({email});
        if(!checkUser)return res.json({
            success:false,
            message:'User doesnt exists',
        })
        const checkPasswordMatch=await bcrypt.compare(password ,checkUser.password );
        if(!checkPasswordMatch)
            return res.json({
        success:false,
        message:'Incorrect password',
        });
        const token=jwt.sign({
            id:checkUser._id,
            role:checkUser.role,
            email:checkUser.email,
        },'CLIENT_SECRET_KEY',{expiresIn:'60m'})
        res.cookie('token',token,{htppOnly:true,secure:false}).json({
            success:true,
            message:'Logged successfully',
            user:{
                email:checkUser.email,
                role:checkUser.role,
                id:checkUser._id,
            }
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "error occurred",
        });
    }
};

//logout
const logOutUser=(req,res)=>{
    res.clearCookie('token').json({
        success:true,
        message:'Logged out successfully',
    })
}
//auth middleware
const authMidlleware=async(req,res,next)=>{
    const token=req.cookies.token;
    if(!token)return res.status(401).json({
        success:false,
        message:'Unauthorised user',
    })
    //decrypt cookie
    try{
const decoded=jwt.verify(token,'CLIENT_SECRET_KEY');
req.user=decoded;
next()
    }catch(error)
    {
        res.status(401).json({
            success:false,
            message:'Unauthorised user',
        })
    }
}

module.exports = { registerUser,loginUser,logOutUser,authMidlleware };
