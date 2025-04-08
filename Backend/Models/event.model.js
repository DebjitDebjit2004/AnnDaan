import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'NormalUser', required: true },
  type_of_org: { 
    type: String, 
    required: true, 
    enum: ['NGO', 'Corporate', 'Individual', 'Others']
  },
  event_type: { 
    type: String, 
    required: true, 
    enum: ['Food Donation', 'Clothing Drive', 'Blood Donation', 'Awareness Campaign', 'Others']
  }
});

export default mongoose.model('Event', EventSchema);