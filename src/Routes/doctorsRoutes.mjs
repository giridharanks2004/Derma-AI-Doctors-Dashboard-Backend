import { Router } from "express";
import { createDoctorInfo, deleteDoctorById, getAllDoctors, getDoctorById, updateDoctorEmail, updateDoctorName, updateDoctorPassword, updateStatus } from "../Controllers/doctorsController.mjs";
import { getAllDiseases } from "../Controllers/diseasesController.mjs";

const router = Router()
router.get("/api/derma-ai/doctors/category",getAllDiseases)
router.post("/api/derma-ai/doctors",createDoctorInfo)
router.get("/api/derma-ai/doctors/:id",getDoctorById)
router.get("/api/derma-ai/doctors",getAllDoctors)
router.patch("/api/derma-ai/doctors/:id/name",updateDoctorName)
router.patch("/api/derma-ai/doctors/:id/email",updateDoctorEmail)
router.patch("/api/derma-ai/doctors/:id/password",updateDoctorPassword)
router.patch("/api/derma-ai/doctors/:id/status",updateStatus)
router.delete("/api/derma-ai/doctors/:id",deleteDoctorById)


export default router