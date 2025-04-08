import mongoose from 'mongoose';

const NGOUserSchema = new mongoose.Schema({
    name: { 
        firstName: {
            type: String,
            required: true,
            min: 3
        },
        lastName: {
            type: String,
            required: true,
            min: 3
        }
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true , min: 8},
});

export default mongoose.model('NGOUser', NGOUserSchema);