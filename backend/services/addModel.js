const modelModel = require('../schema/models')

module.exports = async function(req)
{
    let model = await modelModel();
    model.name=req.body.modelName;
    model.desc=req.body.modelDesc;
    model.thumbnail = req.files.modelThumbnail[0].filename;
    model.file = req.files.modelFile[0].filename;
    model.user="Rudra";
    let saveModel = await model.save();
}