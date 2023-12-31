import express from 'express';
import { createParking, getParking, getSingleParking } from '../controllers/ParkingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', protect, createParking);
router.get('/', protect, getParking);
router.get('/getSlots/:id', protect, getSingleParking);

export default router;
