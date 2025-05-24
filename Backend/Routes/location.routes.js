import express from 'express';
import { protectRoute } from "../Middlewares/authentication.middleware.js";
import { createLocation } from '../Controllers/location.controller.js';

const router = express.Router();

router.post("/location/:id", protectRoute, createLocation);