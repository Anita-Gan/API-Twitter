
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.authController = async(req, res) => {
        // const { email, name, password } = req.body;
        
       
        try {  
            const newUser = await prisma.user.create({
                data: {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                },
            })
            
            res.status(200).json({ message: "utilisateur crée" ,user: newUser});
        }
      catch(error){
        res.status(500).json({error: "error found "})
      }  
};