const express = require("express");
const router = express.Router();
const Users = require('/home/user-24-c1/API Twitter/Controllers/usersContoller.js');


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

router.delete("/", function (req, res) {
  const { nom,prenom, age } = req.body;
  const user = {
    nom,
    prenom,
    age,
  };
  Users.splice(user);
  res.json(Users);



 
});





module.exports = router;