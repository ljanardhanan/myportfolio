const express = require('express');
const router = express.Router();

const Session = require('../models/sessions');
const Student = require('../models/students');

//retrieve sessions
router.get('/sessions',(req,res,next)=>{
    const query = {}
    const projection = {}
    const options = { sort: { create_date: -1 }}
    Session.find(query, projection, options).exec(function(err,sessions){
        if(err){
            res.send(err);
        }
        else{
            res.json(sessions);
        }
    })
})

//create session
router.post('/session',(req,res,next)=>{
    let newSession = new Session({
        level: req.body.level,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        session_day: req.body.session_day,
        session_time: req.body.session_time,
        instructor: req.body.instructor,
        create_date: req.body.create_date,
        update_date: req.body.update_date,
        students: req.body.students
    });
    newSession.save((err,session)=>{
        if(err){
            res.json({msg: 'Failed to add session'+err});
        }
        else{
            res.json({msg: 'Added session successfully'});
        }
    });
});

//delete session
router.delete('/session/:id',(req,res,next)=>{
    Session.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json({err});
        }
        else{
            res.json({result});
        }
    });
});

//retrieve students
router.get('/students',(req,res,next)=>{
    const query = {}
    const projection = {}
    const options = { sort: { create_date: -1 }}
    Student.find(query, projection, options).exec(function(err,students){
        if(err){
            res.send(err);
        }
        else{
            res.json(students);
        }
    })
})

//retrieve student based on parameter
router.get('/filterStudents/:level',(req,res,next)=>{
    const query = {level:req.params.level}
    const projection = {}
    const options = { sort: { create_date: -1 }}
    Student.find(query, projection, options).exec(function(err,students){
        if(err){
            res.send(err);
        }
        else{
            res.json(students);
        }
    })
})

//create student
router.post('/student',(req,res,next)=>{
    let newStudent = new Student({
        student_name: req.body.student_name,
        parent_name: req.body.parent_name,
        level: req.body.level,
        create_date: req.body.create_date,
        phone: req.body.phone,
        address: req.body.address,
        sessions_remaining: req.body.sessions_remaining,
    });
    newStudent.save((err,student)=>{
        if(err){
            res.json({msg: 'Failed to add student'+err});
        }
        else{
            res.json({msg: 'Added student successfully'});
        }
    });
});

//delete student
router.delete('/student/:id',(req,res,next)=>{
    Student.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json({err});
        }
        else{
            res.json({result});
        }
    });
});

module.exports = router;