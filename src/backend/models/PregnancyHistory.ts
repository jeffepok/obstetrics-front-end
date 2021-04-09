const mongoose = require('mongoose');
const {pregnantWomanSchema} = require('./PregnantWoman');

const pregnancyHistorySchema = new mongoose.Schema({
    dateOfDelivery: Date,
    problemEncountered: String,
    durationOfPregnancy: Number,
    placeOfBirth: String,
    modeOfDelivery: String,
    pregnantWoman: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'PregnantWoman'}
    ]
});

export default mongoose.model('PregnancyHistory', pregnancyHistorySchema);
