const mongoose = require('mongoose');
const administratorSchema = new mongoose.Schema({
    firstName: String,
    surname: String,
    password: String,
    dateCreated: Date,
    email: String
});

export default mongoose.model('Administrator', administratorSchema);
