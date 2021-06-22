const express = require('express');
const router = express.Router();
const controller = require('../controller/user-controller')


router.get('/doctor', controller.listDoctors);

router.post('/signup', controller.signup);

router.post('/login', controller.login)


module.exports = router
