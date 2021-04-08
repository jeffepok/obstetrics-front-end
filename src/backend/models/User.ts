import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password:{
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now,
    },
    pregnantWoman: {type: mongoose.Schema.Types.ObjectId, ref: 'PregnantWoman'}
})

export default mongoose.model('User', userSchema);
