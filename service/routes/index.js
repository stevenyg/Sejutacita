const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.post('/register', Controller.doRegister)
router.post('/login', Controller.doLogin)
router.post('/refresh', Controller.refresh)

router.use(authentication)

router.get('/music', Controller.getAllMusic)
router.post('/music', authorization, Controller.addMusic)
router.put('/music/:_id', authorization, Controller.updateMusic)
router.delete('/music/:_id', authorization, Controller.deleteMusic)


module.exports = router