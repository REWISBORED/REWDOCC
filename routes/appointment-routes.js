const express = require('express');
const router = express.Router();
const controller = require("../controller/appointment-controller")

router.get("/appointments",controller.list)
router.post("/create",controller.create)

module.exports = router