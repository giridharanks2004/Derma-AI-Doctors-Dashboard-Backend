import mongoose from "mongoose"
import BookingService from "../Services/BookingService.mjs"
import { BookingStatusEnums } from "../Models/bookingModel.mjs"

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

export const getBookingByDoctorId = async (req,res) => {
    try {
        const {id} = req.params
        if(!id || !mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                msg : "provide proper doctor Id to fetch details"
            })
        }
        const saved = await BookingService.getBookingByDoctorId(id)
        return res.status(200).json(saved)
    } catch (e) {
        return res.status(400).json({
            message : e.message
        })
    }
}

export const updateBookingStatus = async (req,res) => {
    try {
        const {id} = req.params
        const {newStatus} = req.body

        if(!BookingStatusEnums.includes(newStatus)){
            return res.status(400).json({
                message : `the status ${newStatus} is not allowed only permitted are ${BookingStatusEnums}`
            })
        }

        if(!id || !mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                msg : "provide proper booking id for updation"
            })
        }

        const saved = await BookingService.updateBookingStatus(id,newStatus)

        return res.status(200).json(saved)
    } catch (e) {
        return res.status(400).json({
            message : e.message
        })
    }
}

export const bookingStatus = async (req,res) => {
    try {
        const {id} = req.params

        if(!id || !mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                msg : "provide proper booking id for updation"
            })
        }

        const bookingStatus = await BookingService.getBookingStatus(id)

        return res.status(200).json(bookingStatus)
        
    } catch (e) {
        res.status(400).json({
            message : e.message
        })
    }
}