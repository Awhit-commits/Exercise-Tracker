const express = require('express');

const router  = express.Router();
let Exercise = require('../models/ExerciseSchema')
router.get('/',(req,res)=>{
    Exercise.find()
    .then(exercise=> res.json(exercise))
    .catch(err => res.status(400).json(`Error: ${err} `))
})

router.post('/add',(req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise ({
        username,
        description,
        duration,
        date,
    })

    newExercise.save()
    .then(()=>{res.json(`Exercise Added!`)})
    .catch(err => res.status(400).json(`Error: ${err}`))




})

router.get('/:id',(req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise=> res.json(exercise))
    .catch(err => res.status(400).json(`Error: ${err} `))
})

router.delete('/:id',(req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(exercise=> res.json(`Exercise Deleted`))
    .catch(err => res.status(400).json(`Error: ${err} `))
})

router.put('/update/:id',(req,res)=>{
    Exercise.findById(req.params.id,req.body)
    .then(exercise=> {
        exercise.username=req.body.username;
        exercise.description=req.body.description;
        exercise.duration = req.body.duration;
        exercise.date=req.body.date;
        exercise.save()
        .then(()=>res.json(`Exercise Updated`))
        .catch(err => res.status(400).json(`Error: ${err} `))
    })
    .catch(err => res.status(400).json(`Error: ${err} `))

})


module.exports = router