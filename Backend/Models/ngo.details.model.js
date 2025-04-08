const NGODetailsSchema = new mongoose.Schema({
    ngo_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'NGOUser', 
        required: true 
    },
    ngo_name: { type: String, required: true, min: 6 },
    registration_no: { type: String, required: true, unique: true },
    since: { type: String, required: true },
    ngo_types: { 
        type: String, 
        required: true, 
        enum: ['Health', 'Education', 'Environment', 'Animal Welfare', 'Poverty Alleviation']
    },
    no_of_members: { type: Number, required: true },
    certificates: {
        certificate_1: { type: String, required: true },
        certificate_2: { type: String, required: true },
        certificate_3: { type: String, required: true }
    },
    picture: { type: String, required: true }
});

export default mongoose.model('NGODetails', NGODetailsSchema);