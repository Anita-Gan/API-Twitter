const express = require("express");
const router = express.Router();


router.get("/:id", function (req, res) {
  res.send("salut " + req.params.id);
});

router.post("",createTweets);

router.delete("/:id", function (req, res) {
  res.send("Supprimer un tweet");
});

router.put("/:id", function (req, res) {
  res.send("mettre un tweet");
});



module.exports = router;