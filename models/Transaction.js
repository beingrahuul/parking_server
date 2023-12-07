import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const transactionSchema = new Schema({
  parkingSpot: { type: Schema.Types.ObjectId, ref: 'ParkingSpot', required: true },
  user: { 
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date },
  totalPrice: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
  // Additional fields as needed
}, { timestamps: true });

export default model('Transaction', transactionSchema);
