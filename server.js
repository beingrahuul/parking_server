import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
// my imports
import userRoutes from './routes/userRoutes.js';
import parkingRoutes from './routes/parkingRoutes.js';
import slotRoutes from './routes/slotRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';

dotenv.config();
const app = express();

app.use(cookieParser());
app.use(json());
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));


app.use('/api/parking', parkingRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/slot', slotRoutes);
app.use('/api/payment', paymentRoutes);




const connent_db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connent_db();
  console.log(`Server running on port ${PORT}`);
});
