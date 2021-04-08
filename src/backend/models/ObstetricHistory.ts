const mongoose = require('mongoose');
// const {pregnantWomanSchema} = require('./PregnantWoman');

const obstetricHistorySchema = new mongoose.Schema({
    numberOfPregnancies: Number,
    numberOfBirths: Number,
    numberOfAbortions: Number,
    pregnantWoman: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'PregnantWoman'}
    ]
});

export default mongoose.model('ObstetricHistory', obstetricHistorySchema);
