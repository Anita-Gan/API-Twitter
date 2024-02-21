const express = require("express");
const router = express.Router();
const Users = require('/home/user-24-c1/API Twitter/Models/ModelAuth.js');
const { Prisma } = require("@prisma/client");


router.post('/signup', async(req, res) => {
    try {
const user= await Prisma.user.findunique({
    where:{
        email: req.body.email,
    },
})

    }
    catch(error){
        res.status(500).send("erreur server")
    }
    const { name, password } = req.body
    
    Users;
    res.json(Users);

    const valid = Users.some((user) => user.name === name && user.password === password)
    res.send(valid)
    if (valid) {
        res.send(valid)
    } else {
        res.send(404, " user not found")
    }
})







module.exports = router;