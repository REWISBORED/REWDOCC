const mongoose = require('mongoose')


const appointmentSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true
    },
    cancle:{
        type: Boolean,
        default: false
    },
    doctor:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('appointment', appointmentSchema)