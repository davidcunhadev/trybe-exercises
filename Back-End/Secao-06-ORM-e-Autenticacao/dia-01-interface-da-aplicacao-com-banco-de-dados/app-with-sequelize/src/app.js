const express = require('express')
const app = express()

const User = require('./Controller/user.controller')

app.use(express.json())

app.get('/', User.getAll)

app.get('/user/:id', User.getById);

app.get('/user/search/:id', User.getByIdAndEmail);

app.post('/user', User.createUser);

app.put('/user/:id', User.updateUser);

app.put('/user/:id', User.updateUser);


module.exports = app