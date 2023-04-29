const getModelId = require('../services/getModelId')

async function getName_controller(req,res)
{
    const {id}=req.params;
    const models = await getModelId(id);
    res.send(models);
}

module.exports = getName_controller;