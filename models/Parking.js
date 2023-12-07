import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const parkingSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: { type: String, required: true },
  location: { type: String, required: true },
  totalSlots: { type: Number, required: true, default: 0 },
  emptySlots: { type: Number, required: true, default: 0 },
  bookedSlots: { type: Number, required: true, default: 0 },
  slots: [{ type: Schema.Types.ObjectId, ref: 'ParkingSpot' }] 
}, { timestamps: true });

export default model('Parking', parkingSchema);
