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
  .route("/:id")
  .get((req, res, next) => {
    const postId = parseInt(req.params.id, 10);
    const foundPost = posts.find((post) => post.id === postId);
    if (!foundPost) {
      return next(new AppError("No Post with this ID", 404));
    }

    res.status(200).json({ success: true, data: foundPost });
  })
  .put((req, res, next) => {
    const postId = parseInt(req.params.id, 10);
    const foundPost = posts.find((post) => post.id === postId);
    if (!foundPost) {
      return next(new AppError("No Post with this ID", 404));
    }

    foundPost.title = req.body.title;
    foundPost.content = req.body.content;
    foundPost.edited = true;

    res.status(200).json({
      success: true,
      message: "Post succesfully edited",
      data: foundPost,
    });
  })
  .delete((req, res, next) => {
    const postId = parseInt(req.params.id, 10);
    const postIndex = posts.findIndex((post) => post.id === postId);
    if (postIndex === -1) {
      return next(new AppError("No Post with this ID", 404));
    }

    const deletedPost = posts.splice(postIndex, 1)[0];

    res.status(200).json({
      success: true,
      message: "Post deleted sucessfully",
      data: deletedPost,
    });
  });

module.exports = router;
