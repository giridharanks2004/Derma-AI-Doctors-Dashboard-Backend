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

export default {createBooking}