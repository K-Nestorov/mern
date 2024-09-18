const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,  // Corrected 'inique' to 'unique'
        },
        email: {
            type: String,
            required: true,
            unique: true,  // Corrected 'inique' to 'unique'
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: 'user',
        }
    }
);

const User = mongoose.model('User', UserSchema);

// Corrected the export
module.exports = User;
