const express = require("express");
const AppError = require("../../utils/AppError");

const router = express.Router({ mergeParams: true });

const posts = [
  {
    id: 1,
    userId: 1,
    title: "Building RAG endpionts with Local Models",
    content: "Here is a link to my Documentation",
    createdAt: new Date("2026-5-23"),
  },
];

router
  .route("/")
  .get((req, res) => {
    res.status(200).json({ success: true, data: posts });
  })
  .post((req, res, next) => {
    const newPost = { id: posts.length + 1, ...req.body };
    posts.push(newPost);
    res
      .status(200)
      .json({ success: true, message: "New Post published", data: newPost });
  });
