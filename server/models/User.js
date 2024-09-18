const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
            inique:true,
        },
        email:{
            type:String,
            required:true,
            inique:true,
        },
        password:{
            type:String,
            required:true,
            inique:true,
        },
        role:{
            type:String,
            default:'user'
        }
    }
);
const User=mongoose.model('User',UserSchema);
mongoose.model.export=User;