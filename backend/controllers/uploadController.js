const addModel = require('../services/addModel')
async function upload_controller(req,res)
{
    // upload.fields([{
    //     name:'modelThumbnail',maxCount:1
    // },{
    //     name:'modelFile',maxCount:1
    // }])
    addModel(req);
    // console.log(req.files.modelThumbnail[0].filename);
    // console.log(req.files.modelFile[0].filename);
    res.json({status:"uploaded"});
}

module.exports = upload_controller;