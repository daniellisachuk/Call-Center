const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get("/", controller.renderPage);
router.post('/', controller.postToKafka);

module.exports = router;
