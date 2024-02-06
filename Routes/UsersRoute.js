const express = require("express");
const router = express.Router();
const {create} = require('/home/user-24-c1/API Twitter/Controllers/usersContoller.js')



router.get("/:id", function (req, res) {
  res.send("voir votre tweet " );
});

router.post("", create);

router.put("/:id", function (req, res) {
  res.send("mettre un tweet");
});

router.delete("/:id", function (req, res) {
  res.send("Supprimer un tweet");
});





module.exports = router;