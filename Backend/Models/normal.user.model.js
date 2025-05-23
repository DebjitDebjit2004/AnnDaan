import mongoose from 'mongoose';

const NormalUserSchema = new mongoose.Schema({
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
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true , min: 8},
    phone: { type: Number, required: true , min: 10},
});

const NormalUser = mongoose.model('NormalUser', NormalUserSchema);
export default NormalUser;