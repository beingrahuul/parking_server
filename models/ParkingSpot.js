import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const parkingSpotSchema = new Schema({
  spotNumber: { type: String, required: true, unique: true },
  isOccupied: { type: Boolean, required: true, default: false },
  reserved: { type: Boolean, required: true, default: false },
}, { timestamps: true });

export default model('ParkingSpot', parkingSpotSchema);
