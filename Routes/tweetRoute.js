const express = require("express");
const router = express.Router();


router.get("/", function (req, res) {
    const { nom, prenom, age } = req.body;
    const user = {
      nom,
      prenom,
      age,
    };
    res.json(Users);
  
  });
  
  router.post("/", (req, res) => {
    const { nom,prenom, age } = req.body;
    const user = {
      nom,
      prenom,
      age,
    };
    Users.push(user);
    res.json(Users);
  
  });
  
  router.put("/", function (req, res) {
    res.send("mettre un tweet");
  });
  
  router.delete("/:id", function (req, res) {
    const id= req.params.id
    const { nom,prenom, age } = req.body;
    const user = {
      nom,
      prenom,
      age,
    };
    Users.splice(id,1);
    res.json(Users);
  
  
  
   
  });
