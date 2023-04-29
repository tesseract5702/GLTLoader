const express = require('express');
const router = express.Router();
const getModel_controller = require('../controllers/getModelController');
const { route } = require('./uploadRouter');

router.get("/",getModel_controller);

module.exports = router;