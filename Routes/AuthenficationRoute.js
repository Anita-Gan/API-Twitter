const express = require("express");
const router = express.Router();
const Users= require('/home/user-24-c1/API Twitter/Models/ModelAuth.js')


    router.post('/', (req,res)=>{
        const{name,password}=req.body
        const auth = {
            name,
            password
          };
          Users.push(auth);
          res.json(Users); 
    })
       
    





module.exports = router;