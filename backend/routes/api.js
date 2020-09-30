const express = require('express');
const router = express.Router();
const TaskPost = require('../models/taskPost');


// Routes
router.post('/save', (req, res) =>{
    console.log('Body: ', req.body);
    const data = req.body;
    const newTaskPost = new TaskPost(data);

    newTaskPost.save((error) =>{
        if(error){
            res.status(500).json({msg:'Sorry, internal server errors'});
        }
        else{
            res.json({
                msg: 'Your data has been saved!'
            });
        }
    });
});

router.get('/', (req, res) =>{
    TaskPost.find({ })
    .then((data) =>{
        console.log('Data: ', data );
        res.json(data);
    })
    .catch((error) =>{
        console.log('error: ', dataerror);
    })
 });

module.exports = router;