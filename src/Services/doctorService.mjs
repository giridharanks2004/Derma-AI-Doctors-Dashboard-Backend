import DoctorsDB from "../Models/doctorInfoModel.mjs"
import bcrypt from "bcrypt"
import { DoctorsResponseDTO } from "../DTO/DoctorsResponseDTO.mjs"

const createDoctorInfo = async (doctorDetails) => {
    try {
        const encryptedPwd = await bcrypt.hash(doctorDetails.password,10)
        doctorDetails.password = encryptedPwd
        const saved = await DoctorsDB.create(doctorDetails)
        return saved
        
    } catch (e) {
        throw new Error(e.message)
    }
}
const getAllDoctors = async (filter) => {
    try {
        const doctors = await DoctorsDB.find(filter)
        const doctorsAbstracted = doctors.map((doctor) => DoctorsResponseDTO(doctor))
        return doctorsAbstracted
    } catch (e) {
        throw new Error(e.message)
    }
}
const getDoctorById = async (id) => {
    try {
        const doc_info = await DoctorsDB.findById(id)
        return DoctorsResponseDTO(doc_info)
    } catch (e) {
        throw new Error(e.message)
    }
}

const deleteDoctorById = async (id) => {
    try {
        const deleted = await DoctorsDB.findByIdAndDelete(id)
        if(deleted == null){
            return false
        }     
        return true
    } catch (e) {
        throw new Error(e.message)
    }
}

const updateName = async (id,newName) => {
    try {
        const doctorInfo = await DoctorsDB.findOne({_id : id})
        if(doctorInfo){
            doctorInfo.doctorName = newName
            await doctorInfo.save()
            return DoctorsResponseDTO(doctorInfo)
        }
        return null
     
    } catch (e) {
        throw new Error(e.message)
    }
}

const updateEmail = async (id , newEmail) => {
    try {
        const doctorInfo = await DoctorsDB.findOne({_id : id})
        if(doctorInfo){
            doctorInfo.email = newEmail
            await doctorInfo.save()
            return DoctorsResponseDTO(doctorInfo)
        }
        return null
    } catch (e) {
        throw new Error(e.message)
    }
}

const updatePassword = async (id , oldPassword , newPassword) => {
    try {
        const doctorInfo = await DoctorsDB.findOne({_id : id})
        if(doctorInfo){
           const isMatched = await bcrypt.compare(oldPassword,doctorInfo.password)
           if(!isMatched){
                throw new Error("pwdNotMatch")
           }
           doctorInfo.password = await bcrypt.hash(newPassword,10)
        }
        return null
    } catch (e) {
        throw new Error(e.message)
    }
    
}


export default {createDoctorInfo,getDoctorById,deleteDoctorById,getAllDoctors,updateName,updateEmail,updatePassword}