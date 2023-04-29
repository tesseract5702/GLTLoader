const getModel = require('../services/getModel')

async function getModel_controller(req,res)
{
     const models = await getModel();
     
    console.log(models)
    res.send(models);
}

module.exports = getModel_controller;