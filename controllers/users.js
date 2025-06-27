

const usersService = require('../service/users')
users = []

exports.getUserConfig = async (req, res) => {
  const config = await usersService.getUserConfig();
  res.success(config);
}




//生成登陆验证码
exports.getCaptcha = async (req, res) => {
    const config = await usersService.getUserConfig();
    res.success(config);
  }
  
exports.createUser = (req, res) => {
  const newUser = req.body
  users.push(newUser)
  res.status(201).json(newUser)
}

exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === req.params.id)
  user ? res.json(user) : res.status(404).send('User not found')
}

exports.updateUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id)
  if (index !== -1) {
    users[index] = {...users[index], ...req.body}
    res.json(users[index])
  } else {
    res.status(404).send('User not found')
  }
}

exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id)
  if (index !== -1) {
    users.splice(index, 1)
    res.status(204).send()
  } else {
    res.status(404).send('User not found')
  }
}
