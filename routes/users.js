//用户管理
var express = require('express');
var router = express.Router();
const usersController = require('../controllers/users')


//获取公共配置
router.get('/pub-config', usersController.getUserConfig)


//获取验证码
router.get('/captcha', usersController.getCaptcha)
// router.post('/', usersController.createUser)
// router.get('/:id', usersController.getUserById)
// router.put('/:id', usersController.updateUser)
// router.delete('/:id', usersController.deleteUser)


module.exports = router;
