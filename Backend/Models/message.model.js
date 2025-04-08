import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'NormalUser', required: true },
    reciver: { type: mongoose.Schema.Types.ObjectId, ref: 'NGOUser', required: true },
    image: { type: String, required: true },
    text: { type: String, required: true }
});

export default mongoose.model('Message', MessageSchema);