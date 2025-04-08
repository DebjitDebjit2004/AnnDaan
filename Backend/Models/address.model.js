import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'NormalUser'},
    ngo_id: { type: mongoose.Schema.Types.ObjectId, ref: 'NGOUser'},
    Line_1: { type: String, required: true, min: 10, max: 100 },
    Line_2: { type: String, required: true , min: 10, max: 100 },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pin_code: { type: String, required: true }
});

export default mongoose.model('Address', AddressSchema);