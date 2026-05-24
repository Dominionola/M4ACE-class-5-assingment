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
      .status(201)
      .json({ success: true, message: "New Post published", data: newPost });
  });

router
  .route(":/id")
  .get((req, res, next) => {
    const postId = parseInt(req.params.id, 10);
    const foundPost = posts.find((post) => post.id === postsId);
    if (!postId) {
      return next(AppError("No Post with this ID", 404));
    }

    res.status(201).json({ success: true, data: postId });
  })
  .put((req, res, next) => {
    const postId = parseInt(req.params.id, 10);
    const foundPost = posts.find((post) => post.id === postId);
    if (!postId) {
      return next(AppError("No Post with this ID", 404));
    }

    posts[postId] = {
      ...foundPost,
      name: req.body.name,
      track: req.body.track,
      edited: true,
    };

    res
      .status(201)
      .json({
        success: true,
        message: "Post succesfully edited",
        data: foundPost,
      });
  })
    .delete((req, res, next) => {
      
  })
