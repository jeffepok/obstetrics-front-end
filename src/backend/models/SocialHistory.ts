const mongoose = require('mongoose');
// const {pregnantWomanSchema} = require('./PregnantWoman');

const socialHistorySchema = new mongoose.Schema({
    alcohol: Boolean,
    smoking: Boolean,
    pregnantWoman: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'PregnantWoman'}
    ]
});

export default mongoose.model('SocialHistory', socialHistorySchema);
