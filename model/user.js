const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    appointment:[
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'appointment'

        }
    ]

})

module.exports = mongoose.model('user', userSchema)
