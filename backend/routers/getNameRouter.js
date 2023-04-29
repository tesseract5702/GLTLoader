const express = require('express');
const router = express.Router();
const getName_controller = require('../controllers/getNameController');

router.get("/:id",getName_controller);

module.exports = router;