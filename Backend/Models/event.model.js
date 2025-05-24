import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'NormalUser', required: true },
  type_of_org: { 
    type: String, 
    required: true, 
    enum: [
      'Corporate',
      'Social',
      'Sports',
      'Cultural',
      'Academic',
      'Religious',
      'Political',
      'Health',
      'Environmental',
      'Educational',
      'Charitable',
      'Other'
    ],
  },
  event_type: { 
    type: String, 
    required: true, 
    enum: [
      'Conference',
      'Seminar',
      'Workshop',
      'Webinar',
      'Concert',
      'Festival',
      'SportsEvent',
      'Fundraiser',
      'Exhibition',
      'Meetup',
      'Competition',
      'Ceremony',
      'Party',
      'Wedding',
      'CulturalEvent',
      'Other'
    ],
  }
});

export default mongoose.model('Event', EventSchema);