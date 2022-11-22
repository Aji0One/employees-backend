const mongoose= require("mongoose");

//Schema Definition
const employeeSchema= new mongoose.Schema({
    name:{
        type: String,
        require: true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    address:{
        type: String,
        require:true,
        trim: true
    },
    designation:{
        type: String,
        require: true, 
    },
    mobileNumber:{
        type: Number,
        require: true,
        unique: true,
    },
    bloodGroup:{
        type: String
    }
})

// Model Creation
module.exports = mongoose.model('my-org', employeeSchema);