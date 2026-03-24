import { Router } from "express";
import { bookingStatus, createBooking, getBookingByDoctorId, updateBookingStatus } from "../Controllers/bookingController.mjs";

const router = Router()

router.post("/api/derma-ai/booking",createBooking)
router.get("/api/derma-ai/:id/bookings",getBookingByDoctorId)
router.patch("/api/derma-ai/booking/:id/status",updateBookingStatus)
router.get("/api/derma-ai/booking/:id/status",bookingStatus)

export default router