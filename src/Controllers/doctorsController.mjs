import { response } from "express"
import doctorService from "../Services/doctorService.mjs"
import mongoose from "mongoose"
import { DoctorsResponseDTO } from "../DTO/DoctorsResponseDTO.mjs"
export const createDoctorInfo = async (req, res) => {
    try {
        const {doctorName , docType, email , password} = req.body
        const saved = await doctorService.createDoctorInfo({doctorName,docType,email,password})
        return res.status(201).json(saved)
    } catch (e) {
        return res.status(400).json({
            error : e.message
        })
    }
}

export const getAllDoctors = async (req, res) => {
    try {
        const {Type} = req.query
        console.log(req.query);
        
        let doctors = null

        if(!Type){
            doctors = await doctorService.getAllDoctors({})
        }else{
            doctors = await doctorService.getAllDoctors({docType : Type})
        }
        
        return res.status(200).json(doctors)
    } catch (e) {
        return res.status(400).json({
            error : e.message
        })
    }
}

export const getDoctorById = async (req , res) => {
    try {
        const {id} = req.params
        if(!id || !mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                msg : "send a valid object id for lookup"
            })
        }

        const doctorInfo = await doctorService.getDoctorById(id)
        
        if(!doctorInfo){
            return res.status(404).json({
                msg : "doctor information is not found!!"
            })
        }

        return res.status(200).json(doctorInfo)

    } catch (e) {
        return res.status(400).json({
            error : e.message
        })
    }
}

export const deleteDoctorById = async (req,res) => {
    try {
        const {id} = req.params

        if(!id || !mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({
                    msg : "send a valid object id for deletion"
                })
        }
            
        const isDeleted = await doctorService.deleteDoctorById(id)

        if(!isDeleted){
            return res.status(404).json({
                msg : "doctor not found"
            })
        }
        
        return res.sendStatus(204)
    } catch (e) {
        return res.status(400).json({
            msg : e.message
        })
    }
}

export const updateDoctorName = async (req,res) => {
    try {
        const {id} = req.params
        const {newName} = req.body

        if(!id || !mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                    msg : "send a valid object id for updation"
                })
        }

        const updated = await doctorService.updateName(id,newName)

        return res.status(200).json(updated)

    } catch (e) {
        return res.status(400).json({
            error : e.message
        })
    }
}

export const updateDoctorPassword = async (req,res) => {
    try{
        const {id} = req.params

        const {oldPassword,newPassword} = req.body

        if(!id || !mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({
                        msg : "send a valid object id for updation"
                    })
        }

        const updated = await doctorService.updatePassword(id,oldPassword,newPassword)

        if(updated){
            return res.status(200).json({
                msg : "password updated"
            })
        }

        return res.status(400).json({
            msg : "incorrect password enter your current password properly"
        })
    }
    catch(e){
        return res.status(400).json({
            error : e.message
        })
    }
}

export const updateDoctorEmail = async (req , res) => {
    try {
        const {id} = req.params
        const {newEmail} = req.body

        if(!id || !mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({
                        msg : "send a valid object id for updation"
                    })
        }

        const updated = await doctorService.updateEmail(id,newEmail)

        return res.status(200).json(updated)
    } catch (e) {
        return res.status(400).json({
            error : e.message
        })
    }
}

export const updateStatus = async (req , res) => {
    try {
        const {id} = req.params
        const {newStatus} = req.body

        if(!id || !mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({
                        msg : "send a valid object id for updation"
                    })
        }

        const updated = await doctorService.updateStatus(id,newStatus) 

        return res.status(200).json(updated)

        
        
    } catch (e) {
        return res.status(400).json({
            error : e.message
        })
    }
}