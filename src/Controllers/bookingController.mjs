import BookingService from "../Services/BookingService.mjs"
export const createBooking = async (req , res) => {
    try {
        const {userId,doctorId,userEmail,imageLink} = req.body
        const saved = await BookingService.createBooking({userId,doctorId,userEmail,imageLink})
        return res.status(201).json(saved)
    } catch (e) {
        return res.status(400).json({
            message : e.message
        })
    }    
}