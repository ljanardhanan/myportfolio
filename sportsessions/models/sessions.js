const mongoose = require('mongoose');


const SessionsSchema = mongoose.Schema({
    level:{
        type: String,
        required: true
    },
    start_date:{
        type: Date,
        required: true
    },
    end_date:{
        type: Date,
        required: true
    },
    session_day:{
        type: String,
        required: true
    },
    session_time:{
        type: String,
        required: true
    },
    instructor:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        required: false
    },
    update_date:{
        type: Date,
        required: false
    },
    students:[{
        name: String,
        age: String
    }]
})

const sessions = module.exports = mongoose.model('sessions', SessionsSchema);