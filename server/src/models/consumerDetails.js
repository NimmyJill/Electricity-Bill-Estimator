const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ElectricityBillEstimator');


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

var Consumerdata = mongoose.model('consumer', NewConsumerSchema);

module.exports = Consumerdata;