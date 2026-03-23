import mongoose from "mongoose";
export const getAllDiseases = async (req , res) => {
    const DiseaseDB = mongoose.connection.collection("diseases_info")
    const diseases = await DiseaseDB.find().toArray()
    return res.status(200).json(diseases)
}   