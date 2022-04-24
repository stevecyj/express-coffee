var express = require("express");
var router = express.Router();
const Post = require("../models/postModel");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const post = await Post.find();
  res.status(200).json({ post });
});

router.post("/", async function (req, res, next) {
  console.log(req.body);
  const newPost = await Post.create(req.body);
  res.status(200).json({ status: "success", post: newPost });
});

module.exports = router;
