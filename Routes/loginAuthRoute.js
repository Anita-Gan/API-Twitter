const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const loginAuth= require('../Controllers/loginAuthControllers')


router.post('/login', loginAuth.loginAuthController )


module.exports = router;