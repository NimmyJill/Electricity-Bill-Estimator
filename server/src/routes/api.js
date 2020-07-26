const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const userIn=require('../models/users');

// mongoose.connect(userIn,function(err){
//     if(err){
//         console.error("Error!!" + err)
//     } else {
//         console.log('Connected to Mongodb');
//     }
// });

router.get('/',(req,res)=>{
    res.send("From Api")
})

module.exports = router;