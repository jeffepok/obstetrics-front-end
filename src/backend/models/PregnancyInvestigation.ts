const mongoose = require('mongoose');
// const {pregnantWomanSchema} = require('./PregnantWoman');

const pregnancyInvestigationSchema = new mongoose.Schema({
    investigationType: String,
    finding: String,
    dateOfInvestigation: Date,
    pregnantWoman: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'PregnantWoman'}
    ]
});

export default mongoose.model('PregnancyInvestigation', pregnancyInvestigationSchema);
