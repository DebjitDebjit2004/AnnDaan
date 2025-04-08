import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  comments: { type: String, min: 10, max: 500 },
  Like: { type: Number, default: 0 },
});

export default mongoose.model('Feedback', FeedbackSchema);