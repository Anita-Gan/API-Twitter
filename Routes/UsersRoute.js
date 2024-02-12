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
  res.status(200).json
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





module.exports = router;