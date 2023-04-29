const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/fabrik"

module.exports = async function initdb()
{
	await mongoose.connect(url);
	console.log("connected to db")
}
