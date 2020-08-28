const express = require('express');
const router = express.Router();
const path = require('path');
controllerPath = path.join(__dirname, '../controllers/controller');
const controller = require(controllerPath);

router.get("/", controller.renderPage);

module.exports = router;
