import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authroutes.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "https://job-assistent.vercel.app"],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// MongoDB Connection
mongoose.connect('mongodb+srv://sathyanarayanansakthi:2cslUYGxIaAOXryP@cluster0.q2fciwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

// Routes
app.use("/api/auth", authRoutes);

// Root test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// For Vercel serverless function
export default async function handler(req, res) {
  // Connect to MongoDB if not already connected
  if (mongoose.connection.readyState !== 1) {
    try {
      await mongoose.connect('mongodb+srv://sathyanarayanansakthi:2cslUYGxIaAOXryP@cluster0.q2fciwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      console.log("Database connected in handler");
    } catch (err) {
      console.error("Database connection error in handler:", err);
    }
  }
  
  return app(req, res);
}