import express from 'express';
import { createParking } from '../controllers/ParkingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', protect, createParking);

export default router;
