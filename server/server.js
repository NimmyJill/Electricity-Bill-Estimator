const express = require('express');
const ConsumerData = require('./src/models/consumerDetails');
const Userdata = require('./src/models/users');
const cors = require('cors');
var bodyparser = require('body-parser');  
var app = new express();
app.use(cors());
app.use(bodyparser.json())
app.get('/admin', function(req,res){
    res.header("Access-control-Allow-Origin", "*")
    res.header("Access-control-Allow-Methods: GET, POST,PATCH, PUT, DELETE, OPTIONS");
    ConsumerData.find()
        .then(function(consumers){
            console.log(consumers);
            res.send(consumers);
        });
});

// var loginStatus;
app.post('/login', function(req,res){
    console.log("Test");
    res.header("Access-control-Allow-Origin", "*")
    res.header("Access-control-Allow-Methods: GET, POST,PATCH, PUT, DELETE, OPTIONS");
    // console.log(req.body);
    let Uname=req.body.credential.consumerName;
    let password= req.body.credential.password;
    Userdata.findOne({consumerName:Uname,password:password})
        .then(function(credential){
            console.log("hello");
            res.send(credential);
           
        });
});

app.post('/signup', function(req,res){
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
// app.post('/admin', function(req,res){
//     res.header("Access-control-Allow-Origin", "*")
//     res.header("Access-control-Allow-Methods: GET, POST,PATCH, PUT, DELETE, OPTIONS");
//     ConsumerData.find()
//         .then(function(consumers){
//             res.send(consumers);
//         });
// });
app.post('/singleConsumer', function(req,res){
    
    res.header("Access-control-Allow-Origin", "*")
    res.header("Access-control-Allow-Methods: GET, POST,PATCH, PUT, DELETE, OPTIONS");
    ConsumerData.findOne({_id:req.body.id})
        .then(function(consumers){
            res.send(consumers);
        });
});
app.post('/update', function(req,res){
    res.header("Access-control-Allow-Origin", "*")
    res.header("Access-control-Allow-Methods: GET, POST,PATCH, PUT, DELETE, OPTIONS");
    ConsumerData.updateOne({_id:req.body.consumer._id},{$set:{ 
        consumerId:req.body.consumer.consumerNumber,
        consumerName:req.body.consumer.consumerName,
        houseName: req.body.houseName,
        lastBillAmount: req.body.lastBillAmount,
        lastMeterReading: req.body.lastMeterReading,
        lastMeterReadingDate:req.body.lastMeterReadingDate,
        connectionType: req.body.connectionType
       }})
        .then(function(consumers){
            res.send(consumers);
        });
});
app.post('/deleteConsumer', function(req,res){
    res.header("Access-control-Allow-Origin", "*")
    res.header("Access-control-Allow-Methods: GET, POST,PATCH, PUT, DELETE, OPTIONS");
        const id=req.body.id;
        console.log(id);
        ConsumerData.deleteOne({_id:id})
        .then((data)=>{
            res.send('Deleted a Consumer!!');
        });
});

app.post('/insert', function(req,res){
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

app.post('/bill', function(req,res){
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

app.listen(3113, function(){
    console.log('listening to port 3113');
})
