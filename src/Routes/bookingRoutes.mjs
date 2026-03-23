import { Router } from "express";
import { createBooking } from "../Controllers/bookingController.mjs";

const router = Router()

router.post("/api/derma-ai/booking",createBooking)

export default router