import express from 'express';
import { createSlot, getSlotDetail } from '../controllers/slotController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', protect, createSlot);
router.get('/:id', protect, getSlotDetail);


export default router;
