const express = require("express");
const AppError = require("../../utils/AppError");

const router = express.Router({ mergeParams: true });

let users = [{ id: 1, name: "Dominion Samuel", track: "Backend Dev" }];

router
  .route("/")
  .get((req, res) => {
    res.status(200).json({ success: true, data: users });
  })
  .post((req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json({ success: true, data: newUser });
  });

router
  .route("/:id")
  .get((req, res, next) => {
    const userId = parseInt(req.params.id, 10);
    const foundUser = users.find((user) => user.id === userId);

    if (!foundUser) {
      return next(new AppError("No User found with this ID", 404));
    }

    res.status(200).json({ success: true, data: foundUser });
  })
  .put((req, res, next) => {
    const userId = parseInt(req.params.id, 10);
    const foundUser = users.find((user) => user.id === userId);

    if (!foundUser) {
      return next(new AppError("No User found with this ID", 404));
    }

    foundUser.name = req.body.name;
    foundUser.track = req.body.track;

    res.status(200).json({
      success: true,
      message: "User details updated",
      data: foundUser,
    });
  })
  .delete((req, res, next) => {
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      return next(new AppError("No User found with this ID", 404));
    }

    const deletedUser = users.splice(userIndex, 1)[0];

    res
      .status(200)
      .json({ success: true, message: "User deleted", data: deletedUser });
  });

module.exports = router;
