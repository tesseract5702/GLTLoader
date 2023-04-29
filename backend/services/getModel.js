const modelModel = require('../schema/models')

async function getModel()
{
    const arr = await modelModel.find();
    return arr;
}

module.exports = getModel;