// Models/DataModel.js
const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema({
    jsonData: Object,
});

const DataModel = mongoose.model('Data', DataSchema);
module.exports = DataModel;
