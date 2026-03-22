import { Router } from "express";
import { createDoctorInfo, deleteDoctorById, getAllDoctors, getDoctorById } from "../Controllers/doctorsController.mjs";

const router = Router()

router.post("/api/derma-ai/doctors",createDoctorInfo)
router.get("/api/derma-ai/doctors/:id",getDoctorById)
router.get("/api/derma-ai/doctors",getAllDoctors)
router.delete("/api/derma-ai/doctors/:id",deleteDoctorById)

export default router