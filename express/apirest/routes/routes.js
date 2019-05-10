const express = require('express');
const router = express.Router();
const user= require('../models/user').users();
const phone= require('../models/user').phones();

router.get('/user',(req,res)=>{
 res.send('get');
});
router.post('/user',(req,res)=>{
   var a = req.body;
    res.json(a);
});
router.put('/user',(req,res)=>{
    var a = req.body;
    res.json(a);
});
router.delete('/user',(req,res)=>{
    var a = req.body;
    res.json(a);
});

module.exports = router;