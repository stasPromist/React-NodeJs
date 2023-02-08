const { array } = require('joi');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 256,
    },
    email: {
        type: String,
        require: true,
        minlength: 6,
        maxlength: 256,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 1024,
    },
    isBiz: {
        type: Boolean,
        default: false,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true,
    },
    favCards: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Card'
        }
        ]
         
});

const User = mongoose.model('User', userSchema);

exports.User = User;