const mongoose = require('mongoose');


const StudentsSchema = mongoose.Schema({
    student_name:{
        type: String,
        required: true
    },
    parent_name:{
        type: String,
        required: true
    },
    level:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    sessions_remaining:{
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
    }
})

const students = module.exports = mongoose.model('students', StudentsSchema);