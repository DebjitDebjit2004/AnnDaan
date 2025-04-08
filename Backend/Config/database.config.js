import mongoose from "mongoose";

// MongoDB connection URI
const MONGO_URI = process.env.MONGO_URI;

// Database connection Configuration
async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("MongoDB connected successfully")
    }).catch((err) => {
        console.error("MongoDB connection error:", err);
    });
}

// Export the connectDB function
export default connectDB;