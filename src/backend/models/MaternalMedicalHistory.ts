const mongoose = require('mongoose');
const {pregnantWomanSchema} = require('./PregnantWoman');

const maternalMedicalHistorySchema = new mongoose.Schema({
    hypertension: Boolean,
    heartDisease: Boolean,
    sickle_cell: Boolean,
    allergies: String,
    pregnantWoman: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'PregnantWoman'}
    ]
});

export default mongoose.model('MaternalMedicalHistory', maternalMedicalHistorySchema);
