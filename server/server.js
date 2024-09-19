const express=require('express');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const authRouter=require('./routes/auth/auth-routes');
const adminProductsRouter=require('./routes/admin/products-routes');
//creating DB connection


mongoose.connect('mongodb+srv://bobery177:jO3XKRXCyMTRAiPR@cluster0.bk1t3.mongodb.net/')
.then(()=>console.log("Mongo is connected"))
.catch((error)=>console.log("error"));
const app=express()
const PORT=process.env.PORT||5000;

app.use(
    cors({
        origin: "http://localhost:5173",
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders:[
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials:true
    })
)

app.use(cookieParser());
app.use(express.json());
app.use('/api/admin/products',adminProductsRouter);
app.use("/api/auth", authRouter);
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));

