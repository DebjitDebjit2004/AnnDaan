import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    ngo_id: { type: mongoose.Schema.Types.ObjectId, ref: 'NGOUser'},
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'NormalUser'},
    title: { type: String, required: true, min: 30, max: 100 },
    description: { type: String, required: true, min: 100, max: 500 },
    pic: { type: String, required: true }
});

export default mongoose.model('Post', PostSchema);