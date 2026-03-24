import mongoose, { Schema } from "mongoose"

export const BookingStatusEnums = ["Requested","Viewed","Accepted","Resolved","Pending"]

const bookingModel = new mongoose.Schema({
    userId : {
        type : String,
        required : true
    },
    doctorId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "doctorInfomation"
    },
    userEmail : {
        type : String,
        required : true,
        lowercase : true,
        trim : true,
        match : [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please use a valid email address']
    },
    imageLink : {
        type : String,
        required : true,
    },
    bookingStatus : {
        type : String,
        enum : BookingStatusEnums,
        default : "Requested"
    }
})
bookingModel.index({doctorId : 1})
export default mongoose.model("doctorBooking",bookingModel)

