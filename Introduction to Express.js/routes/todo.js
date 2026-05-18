const express = require("express");
const router = express.Router();

let todos = [];
nextId = 0;

router.post("/", (req, res) => {
  const newTodo = {
    id: nextId++,
    title: req.body.title,
  };
  todos.push(newTodo);
  res.json(newTodo);
});

router.get("/", (req, res) => {
  res.json(todos);
});

router.get("/:id", (req, res) => {
  const todoId = parseInt(req.params.id, 10);
  const foundTodo = todos.find((t) => t.id === todoId);
  if (!foundTodo) {
    res.status(404).json({ error: "Todo not found" });
  }
  res.json(foundTodo);
});
module.exports = router;
