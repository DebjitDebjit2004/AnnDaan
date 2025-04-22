import express from "express";
import { protectRoute } from "../Middlewares/authentication.middleware.js";
import { createEvent, getEvents, getEventById, updateEvent, deleteEvent } from "../Controllers/event.controller.js";

const router = express.Router();

router.post("/create", protectRoute, createEvent);
router.get("/events", protectRoute, getEvents);
router.get("/event/:id", protectRoute, getEventById);
router.put("/update/:id", protectRoute, updateEvent);
router.delete("/delete/:id", protectRoute, deleteEvent);

export default router;