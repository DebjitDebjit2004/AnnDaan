import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

// File Requires
import connectDB from './Config/database.config.js';

const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // Connect to MongoDB
    connectDB();
})