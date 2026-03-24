import doctorService from "./doctorService.mjs"
import BookingDB from "../Models/bookingModel.mjs"
const createBooking = async (bookingInfo) => {
    try {
        const {doctorId} = bookingInfo

        const doctorInfo = doctorService.getDoctorById(doctorId)

        if(!doctorInfo){
            throw new Error("doctorNotFound")
        }
        
        const newBooking = await BookingDB.create(bookingInfo)
        
        return {
            msg : "Booking confirmed!",
            referenceId : newBooking._id,
            doctorName : doctorInfo.doctorName
        }

    } catch (e) {
        throw new Error(e.message)
    }
}

const getBookingByDoctorId = async (id) => {
    try {
        const bookings = await BookingDB.find({doctorId : id})
        return bookings
    } catch (e) {
        throw new Error(e.message)
    }
}

const updateBookingStatus = async (id,newStatus) => {
    try {
        const bookinginfo = await BookingDB.findById(id)
        if(!bookinginfo){
            throw new Error("BookingNotFound")
        }
        bookinginfo.bookingStatus = newStatus
        await bookinginfo.save()
        return bookinginfo
    } catch (e) {
        throw new Error(e.message)
    }
}

const getBookingStatus = async (bookingId) => {
    try {
        const bookingInfo = await BookingDB.findById(bookingId)
        if(!bookingInfo){
            throw new Error("BookingNotFound")
        }
        return {
            BookingReferenceId : bookingInfo._id,
            bookingStatus : bookingInfo.bookingStatus 
        } 
        
    } catch (e) {
        throw new Error(e.message)
    }
}

export default {createBooking,getBookingByDoctorId,updateBookingStatus,getBookingStatus}