import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import supportRoutes from "./routes/supportRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;


connectDB();


app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

app.use(express.json());


// Health Check

app.get("/", (req, res) => {

  res.json({
    success: true,
    message: "CareConnect API is running"
  });

});



app.use("/api/support",supportRoutes);


app.use(errorHandler);



app.listen(PORT, () => {

  console.log(
    `CareConnect server running on http://localhost:${PORT}`
  );

});