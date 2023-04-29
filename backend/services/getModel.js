const modelModel = require('../schema/models')

async function getModel()
{
    const arr = await modelModel.find();
    // let newobj = new modelModel();
    // newobj.name ='kuch toh hai';
    // newobj.save()
    return arr;
    // return null
}

module.exports = getModel;