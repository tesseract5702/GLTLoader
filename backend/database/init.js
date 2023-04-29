const mongoose = require('mongoose');
const url = "mongodb+srv://rudra:RYG0OUmorsLHZl2Z@cluster0.u9mlmng.mongodb.net/fabrik"

module.exports = async function initdb()
{	try{
	await mongoose.connect(url);
}catch(err){console.log(err)}console.log("connected to db")
}
