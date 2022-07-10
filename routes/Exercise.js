const router=require('express').Router();
let Exercise=require('../models/exercise');

router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exercises=>res.json(exercises ))
    .catch(err=>res.status(400).json('Errors:'+err));
});

router.route('/add').get((req,res)=>{
    const username=req.body.username;
    const description=req.body.description;
    const duration=Number(req.body.duration);
    const date=Date(req.body.date);

    const newExercise=new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
    .then(()=>res.json('Exercise Added'))
    .catch(err=>res.status(400).json('Error'+err));
})

router.route('/:id').get((req,res)=>{
    Exercise.findById(req,body.id)
    .then(exercise=>res.json(exercise))
    .catch(err=>res.status(400).json('error'+err));
})

router.route('/:id').delete((req,res)=>{
    Exercise.findByIdAndDelete(req,body.id)
    .then(()=>res.json('Exercise deleted'))
    .catch(err=>res.status(400).json('error'+err));
})

router.route('/update/:id').get((req,res)=>{
    Exercise.findById(req,body.id)
    .then(exercise=>{
        exercise.username=req.body.username;
        exercise.description=req.body.description;
        exercise.duration=Number(req.body.duration);
        exercise.date=Date(req.body.date);

        exercise.save()
        .then(()=>res.json('Exercise Updated'))
        .catch(err=>res.status(400).json('Error'+err));
    })
    .catch(err=>res.status(400).json('error'+err));
})