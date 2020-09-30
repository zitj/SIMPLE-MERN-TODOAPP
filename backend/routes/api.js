const express = require('express');
const router = express.Router();
const TaskPost = require('../models/taskPost');


// Routes
router.post('/save', (req, res) =>{
    console.log('Body: ', req.body);
    res.json({
        msg:'We received your data!'
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