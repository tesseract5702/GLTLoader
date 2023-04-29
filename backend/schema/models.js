const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const modelSchema = new Schema({
    name:String,
    desc:String,
    thumbnail:String,
    file:String,
    user:String
});

const modelModel = mongoose.model('model', modelSchema);

module.exports = modelModel;
