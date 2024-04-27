const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    role: {
        type: String,
        enum: ['admin', 'client'],
        required : false,
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    products : [
        {
            type: Schema.Types.ObjectId,
            ref : 'Product'
        }
    ]
},

{
    timestamps: true
});

const userSchema = mongoose.model('User', UserSchema);

module.exports = userSchema;
