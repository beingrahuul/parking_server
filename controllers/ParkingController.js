import asyncHandler from 'express-async-handler';
import Parking from '../models/Parking.js';


export const createParking = asyncHandler(async (req, res) => {
  const { name, location } = req.body;
  const userId = req.user;

  const existingParking = await Parking.findOne({ name, location, owner: userId });
  if (existingParking) {
    res.status(400);
    throw new Error('A parking facility with the same name and location already exists.');
  }

  const parking = new Parking({
    owner: userId,
    name,
    location,
    totalSlots: 0,
    emptySlots: 0, 
    bookedSlots: 0,        
    slots: []              
  });

  const createdParking = await parking.save();

  res.status(201).json({
    message: 'New parking facility created successfully',
    parking: createdParking
  });
});
