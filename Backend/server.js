import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

// File Requires
import connectDB from './Config/database.config.js';
import normalUserRoutes from './Routes/normal.user.routes.js';

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use('/anndaan/user/normal', normalUserRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // Connect to MongoDB
    connectDB();
})