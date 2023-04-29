const express = require("express");
const router = express.Router();
const upload_controller = require('../controllers/uploadController')
const multer  = require('multer')
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
        console.log(file.mimetype);
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg")
        {
            cb(null, 'uploads/image');
        }
        else
        {
            cb(null, 'uploads/model');
        }
	},
	filename: function (req, file, cb) {
	  cb(null, Date.now() + path.extname(file.originalname))
	}
})
const path  = require('path')
const upload = multer({storage: storage,
    limits: { fileSize: 128*1024*1024}
})


router.post('/',upload.fields([{
    name:'modelThumbnail',maxCount:1
},{
    name:'modelFile',maxCount:1
}]),upload_controller);

module.exports = router;