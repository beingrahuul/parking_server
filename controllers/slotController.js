import asyncHandler from 'express-async-handler';
import Parking from '../models/Parking.js';
import ParkingSpot from '../models/ParkingSpot.js';

export const createSlot = asyncHandler(async (req, res) => {
  const { parkingId, spotDetails } = req.body; 

  
  const parkingSpot = new ParkingSpot(spotDetails);
  await parkingSpot.save();

  const parking = await Parking.findById(parkingId);

  if (!parking) {
    res.status(404);
    throw new Error('Parking not found');
  }

  parking.slots.push(parkingSpot);
  parking.totalSlots += 1;
  parking.emptySlots += 1; 

  await parking.save();

  res.status(201).json({
    message: 'Slot created successfully',
    slot: parkingSpot,
    parking: {
      totalSlots: parking.totalSlots,
      emptySlots: parking.emptySlots,
      bookedSlots: parking.bookedSlots
    }
  });
});
