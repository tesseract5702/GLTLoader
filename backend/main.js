const express = require('express');
const app = express();
const cors = require("cors");
const port = 3000;
const initdb = require('./database/init')

app.use(cors());
app.use(express.static("uploads/image"));
app.use(express.static("uploads/model"));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

initdb();
//Controllers
const uploadRouter = require('./routers/uploadRouter')
const getModelRouter = require('./routers/getModelRouter')
const getNameRouter = require('./routers/getNameRouter')
//APIs
app.use('/api/upload',uploadRouter);
app.use('/api/getModels',getModelRouter);
app.use('/api/getName',getNameRouter);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})