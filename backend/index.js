import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/booking.js';


dotenv.config();
const app = express();
const corsOptions = {
  origin:true,
  creditals:true
}
const port=process.env.PORT  ||  8000;


mongoose.set("strictQuery",false);
const connect = async () =>{
try {
    await mongoose.connect(process.env.MONGO,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDB database connected.")
  } catch (err) {
    console.log("MongoDB database connection failed.")
    throw(err)
  }
};

//middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);







app.listen(port,()=>{
    connect()
    console.log("server listening to port.",port);
});
