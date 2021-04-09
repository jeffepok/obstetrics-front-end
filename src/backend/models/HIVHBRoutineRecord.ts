const mongoose = require('mongoose');

const hIVHBRoutineRecordSchema = new mongoose.Schema({
    testName: String,
    date: Date,
    testInterval: Number,
    results: String,
    pregnantWoman: {type: mongoose.Schema.Types.ObjectId, ref: 'PregnantWoman'}

});

export default mongoose.model('HIVHBRoutineRecord', hIVHBRoutineRecordSchema);
