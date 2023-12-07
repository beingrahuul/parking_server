import express from 'express';
import { createSlot } from '../controllers/slotController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', protect, createSlot);

export default router;
