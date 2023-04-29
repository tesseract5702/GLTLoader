const modelModel = require('../schema/models')

async function getModelId(id)
{
    const arr = await modelModel.findOne({_id:id});
    return arr;
}

module.exports = getModelId;