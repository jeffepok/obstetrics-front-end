import * as mongoose from 'mongoose';

export interface IUser{
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
        default: Date,
    },
    pregnantWoman: {type: mongoose.Schema.Types.ObjectId, ref: 'PregnantWoman'}
}

