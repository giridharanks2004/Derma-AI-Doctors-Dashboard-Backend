import mongoose from "mongoose";

const doctorModel = mongoose.Schema({
    doctorName : {
        type : String,
        required : true,
        unique : true
    },
    docType: {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        match : [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please use a valid email address']
    },
    password : {
        type : String,
        required : true
    }
},{
    timestamps : true
})


export default mongoose.model("doctorInfomation",doctorModel)

