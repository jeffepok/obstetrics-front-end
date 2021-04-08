const mongoose = require('mongoose');
// const {pregnantWomanSchema} = require('./PregnantWoman');

const medicalStaffSchema = new mongoose.Schema({
    name: String,
    type: String,
    phoneNumber: String,
    pregnantWoman: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'PregnantWoman'}
    ]
});

export default mongoose.model('MedicalStaff', medicalStaffSchema);
