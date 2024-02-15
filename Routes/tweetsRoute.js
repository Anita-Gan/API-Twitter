const express = require("express");
const router = express.Router();
const Tweets = require('../Controllers/tweetContoller.js');
const multer = require('multer');
// const Tweets = require("../Controllers/tweetContoller.js");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/home/user-24-c1/API Twitter/Myfile')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })
router.get("/", function (req, res) {
  const { userId, id, title, body, url, thumbnailUrl } = req.body;
  const tweet = {
    userId,
    id,
    title,
    body,
    url,
    thumbnailUrl
  };
  res.json(Tweets);

});

router.post("/", upload.single('url'),(req, res) => {
  const { userId, id, title, body, url, thumbnailUrl } = req.body;
  const tweet = {
    userId,
    id:Tweets.length+1,
    title,
    body,
    url: req.file,
    thumbnailUrl
  };
  Tweets.push(tweet);
  res.json(Tweets);
  res.status(200).json(Tweets);
});

router.put("/", function (req, res) {
  res.send("mettre un tweet");
});

router.delete("/:id", function (req, res) {
  const index= req.params.id
  const { userId, id, title, body, url, thumbnailUrl } = req.body;
  const tweet = {
    userId,
    id,
    title,
    body,
    url,
    thumbnailUrl
  };
  Tweets.splice(index,1);
  res.json(Tweets);
 
});

module.exports = router;