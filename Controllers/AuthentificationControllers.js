
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.authController = async(req, res) => {
        const { email, name, password } = req.body;
        
        
        try {  
          const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    password: hashedPassword
                },
            })
            
            res.status(200).json({ message: "utilisateur crée" ,user: newUser});
        }
      catch(error){
        res.status(500).json({error: "error found "})
      }
       
};