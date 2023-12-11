import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const parkingSpotSchema = new Schema({
  spotNumber: { type: String, required: true, unique: true },
  isOccupied: { type: Boolean, required: true, default: false },
  reserved: { type: Boolean, required: true, default: false },
  bookedBy: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default model('ParkingSpot', parkingSpotSchema);
