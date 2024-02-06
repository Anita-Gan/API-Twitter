const express = require("express");
const router = express.Router();
const {getAll,createTweets} = require('../Controllers/usersController.js')




router.get("", getAll);

router.get("/:id", function (req, res) {
  res.send("voir votre tweet " + req.params.id);
});

router.post("",createTweets);

router.delete("/:id", function (req, res) {
  res.send("Supprimer un tweet");
});

router.put("/:id", function (req, res) {
  res.send("mettre un tweet");
});



module.exports = router;