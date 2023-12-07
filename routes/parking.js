import { Router } from 'express';
const router = Router();
import { protect } from '../middleware/authMiddleware.js';
import { checkAvailability, recognizeLicensePlate, getDynamicPricing, preBookParkingSpot, processPayment, sendNotification, logEntryExit } from '../controllers/parking.js';



router.get('/availability', protect , checkAvailability);


router.post('/recognizePlate', protect, recognizeLicensePlate);


router.get('/pricing',protect, getDynamicPricing);


router.post('/prebook', protect, preBookParkingSpot);


router.post('/payment', protect, processPayment);


router.post('/notify', protect, sendNotification);


router.post('/logEntryExit', protect, logEntryExit);

export default router;
