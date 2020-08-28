const path = require('path');
const express = require('express');
const router = express.Router();
controllerPath = path.join(__dirname, '../controllers/controller');
const controller = require(controllerPath);

router.get("/", controller.renderPage);

module.exports = router;
