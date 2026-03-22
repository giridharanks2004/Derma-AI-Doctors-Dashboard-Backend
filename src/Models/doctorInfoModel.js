import mongoose from "mongoose";

const doctorModel = mongoose.Schema({
    doctorName : {
        type : String,
        required : true,
        unique : true
    },
    doctorSpeciality : {
        type : String,
        required : true,
        unique : true,
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

doctorModel.index({email : 1});

export default mongoose.model(doctorModel,"doctorInfomation")

