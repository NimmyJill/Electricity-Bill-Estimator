const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ElectricityBillEstimator');



const Schema = mongoose.Schema;

var CredentialSchema = new Schema({
    consumerName:String,
    password:String,
    type:String
});

var Userdata = mongoose.model('Users', CredentialSchema);

module.exports = Userdata;