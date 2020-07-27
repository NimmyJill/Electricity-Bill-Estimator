const mongoose = require('mongoose');



const Schema = mongoose.Schema;

var CredentialSchema = new Schema({
    consumerName:String,
    password:String,
    type:String
});

var Userdata = mongoose.model('users', CredentialSchema, 'users');

module.exports = Userdata;