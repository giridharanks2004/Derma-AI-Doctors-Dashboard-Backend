import DoctorsDB from "../Models/doctorInfoModel.mjs"
import bcrypt from "bcrypt"

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
        return await DoctorsDB.find(filter)
    } catch (e) {
        throw new Error(e.message)
    }
}
const getDoctorById = async (id) => {
    try {
        const doc_info = await DoctorsDB.findById(id)
        return doc_info
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



export default {createDoctorInfo,getDoctorById,deleteDoctorById,getAllDoctors}