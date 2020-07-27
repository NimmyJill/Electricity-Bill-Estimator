const mongoose = require('mongoose');


const Schema = mongoose.Schema;

var NewConsumerSchema = new Schema({
    consumerNumber: String,
    consumerName: String,
    houseName: String,
    lastBillAmount: Number,
    lastMeterReading: Number,
    lastMeterReadingDate:String,
    connectionType:String
    
});

var Consumerdata = mongoose.model('consumer', NewConsumerSchema, 'consumer');

module.exports = Consumerdata;