import mongoose from 'mongoose';

const LocationSchema = new mongoose.Schema({
    event_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    venue_name: { type: String, required: true, min: 3, max: 100 },
    pin_code: { type: Number, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    line_1: { type: String, required: true, min: 10, max: 100 },
    line_2: { type: String, required: true, min: 10, max: 100 },
});

export default mongoose.model('Location', LocationSchema);