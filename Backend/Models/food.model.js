import mongoose from 'mongoose';

const FoodSchema = new mongoose.Schema({
    event_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    food_type: { 
        type: String, 
        required: true,
        enum: ['veg', 'non-veg']
    },
    food_count: { type: Number, required: true, min: 10, max: 1000 },
    food_availability_time: { 
        type: Date, 
        required: true, 
        default: () => new Date(Date.now() + 12 * 60 * 60 * 1000) // 12 hours from now
    }
});

export default mongoose.model('Food', FoodSchema);