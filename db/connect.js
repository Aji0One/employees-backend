const mongoose= require("mongoose");

const db= async() => {
    try{
       await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connection is established");
    }catch(error){
        console.log('Db error:', error);
    }
}

module.exports= db;