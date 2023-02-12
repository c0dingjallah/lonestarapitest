const express = require('express')

// controller functions
const { createUser } = require('../controllers/controller')

const router = express.Router()

// create user route
router.post('/createUser', createUser)


module.exports = router