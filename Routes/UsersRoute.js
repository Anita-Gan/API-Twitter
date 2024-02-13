const express = require("express");
const router = express.Router();
const Users = require('/home/user-24-c1/API Twitter/Controllers/usersContoller.js');
const multer = require('multer')


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
  const user = {
    userId,
    id,
    title,
    body,
    url,
    thumbnailUrl
  };
  res.json(Users);

});

router.post("/", upload.single('avatar'),(req, res) => {
  const { userId, id, title, body, url, thumbnailUrl } = req.body;
  const user = {
    userId,
    id,
    title,
    body,
    url,
    thumbnailUrl
  };
  Users.push(user);
  res.json(Users);
  res.status(200).json
});

router.put("/", function (req, res) {
  res.send("mettre un tweet");
});

router.delete("/:id", function (req, res) {
  const index= req.params.id
  const { userId, id, title, body, url, thumbnailUrl } = req.body;
  const user = {
    userId,
    id,
    title,
    body,
    url,
    thumbnailUrl
  };
  Users.splice(index,1);
  res.json(Users);
 
});

module.exports = router;