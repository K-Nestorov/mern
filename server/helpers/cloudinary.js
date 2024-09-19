
const cloudinary=require('cloudinary').v2;
const multer=require('multer');
cloudinary.config({
    cloud_name:'dhrsc53b5',
    api_key:'442834847663731',
    api_secret:'2O3SczLH12Fg1I2X8WN21iye7ig',
})

const storage=new multer.memoryStorage();
async function ImageUploadUtil(file){
    const result=await cloudinary.uploader.upload(file,
        {resource_type:'auto',

    });
    return result;
}

const upload=multer({storage});
module.exports={upload,handleImageUpload: ImageUploadUtil};