const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const Userdata=require('../models/users');
const ConsumerData=require ('../models/consumerDetails');
const jwt =require('jsonwebtoken');
const db=('mongodb+srv://user_nimmy:1Olipparambil@mycluster.7dk8q.azure.mongodb.net/ElectricityBillEstimator?retryWrites=true&w=majority');

mongoose.connect(db,function(err){
    if(err){
        console.error("Error!!" + err)
    } else {
        console.log('Connected to Mongodb');
    }
});


router.get('/admin', function(req,res){
    res.header("Access-control-Allow-Origin", "*")
    res.header("Access-control-Allow-Methods: GET, POST,PATCH, PUT, DELETE, OPTIONS");
    ConsumerData.find()
        .then(function(consumers){
            console.log(consumers);
            res.send(consumers);
        });
});

// var loginStatus;
router.post('/login', function(req,res){
    console.log("Test");
    res.header("Access-control-Allow-Origin", "*")
    res.header("Access-control-Allow-Methods: GET, POST,PATCH, PUT, DELETE, OPTIONS");
    // console.log(req.body);
    let Uname=req.body.credential.consumerName;
    let password= req.body.credential.password;
    Userdata.findOne({consumerName:Uname,password:password},
    (err, user)=>{
        if (err){
            console.log(err);

        } else {
            if(!user){
                res.status(401).send('Invalid Credential')

            }  else {
                let payload = {subject:user._id,type:user.type}
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token,user})
            }
        }
    })
    
});

router.post('/signup', function(req,res){
    res.header("Access-control-Allow-Origin", "*")
    res.header("Access-control-Allow-Methods: GET, POST,PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    var credential={
        consumerName:req.body.user.consumerName,
        password:req.body.user.password,
        type:req.body.user.type
      
    }
    var userCredential = new Userdata(credential);
    console.log(userCredential);
    userCredential.save();
});

router.post('/singleConsumer', function(req,res){
    
    res.header("Access-control-Allow-Origin", "*")
    res.header("Access-control-Allow-Methods: GET, POST,PATCH, PUT, DELETE, OPTIONS");
    ConsumerData.findOne({_id:req.body.id})
        .then(function(consumers){
            res.send(consumers);
        });
});
router.post('/updateConsumer', function(req,res){
    res.header("Access-control-Allow-Origin", "*")
    res.header("Access-control-Allow-Methods: GET, POST,PATCH, PUT, DELETE, OPTIONS");
    ConsumerData.updateOne({_id:req.body.consumer._id},{$set:{ 
        consumerId:req.body.consumer.consumerNumber,
        consumerName:req.body.consumer.consumerName,
        houseName: req.body.consumer.houseName,
        lastBillAmount: req.body.consumer.lastBillAmount,
        lastMeterReading: req.body.consumer.lastMeterReading,
        lastMeterReadingDate:req.body.consumer.lastMeterReadingDate,
        connectionType: req.body.consumer.connectionType
       }})
        .then(function(consumers){
            res.send(consumers);
        });
});
router.post('/deleteConsumer', function(req,res){
    res.header("Access-control-Allow-Origin", "*")
    res.header("Access-control-Allow-Methods: GET, POST,PATCH, PUT, DELETE, OPTIONS");
        const id=req.body.id;
        console.log(id);
        ConsumerData.deleteOne({_id:id})
        .then((data)=>{
            res.send('Deleted');
        });
});

router.post('/insert', function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-control-Allow-Methods: GET, POST,PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    var consumer={
        consumerNumber:req.body.consumer.consumerNumber,
        consumerName:req.body.consumer.consumerName,
        houseName: req.body.consumer.houseName,
        lastBillAmount: req.body.consumer.lastBillAmount,
        lastMeterReading: req.body.consumer.lastMeterReading,
        lastMeterReadingDate:req.body.consumer.lastMeterReadingDate,
        connectionType: req.body.consumer.connectionType
    }
    var newConsumer = new ConsumerData(consumer);
    newConsumer.save();
});

router.post('/bill', function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-control-Allow-Methods: GET, POST,PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body.data);
    ConsumerData.findOne({consumerName:req.body.data.consumerName, consumerNumber:req.body.data.consumerNumber})
    .then(function(consumer,err){
        if(err){
            res.json({Message:err})
        }else{
            if(!consumer){
            res.json({Message:"No Result"})                
            }
            else{
            res.json({Message:"OK", consumer});
            }
        }
    });
});



module.exports = router;