const express = require("express");
const router = express.Router();

let todos = [];
let nextId = 0;

router.use((req, res, next) => {
  console.log(`[LOG] ${req.method} request made to ${req.originalUrl}`);
  next();
});

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

router
  .route("/:id")
  .get((req, res) => {
    const todoId = parseInt(req.params.id, 10);
    const foundTodo = todos.find((t) => t.id === todoId);
    if (!foundTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(foundTodo);
  })
  .put((req, res) => {
    const todoId = parseInt(req.params.id, 10);
    const foundTodo = todos.find((t) => t.id === todoId);
    if (!foundTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    foundTodo.title = req.body.title;
    res.json(foundTodo);
  })
  .delete((req, res) => {
    const todoId = parseInt(req.params.id, 10);
    const todoIndex = todos.findIndex((t) => t.id === todoId);

    if (todoIndex === -1) {
      return res.status(404).json({ error: "Todo not found" });
    }

    const deletedTodo = todos.splice(todoIndex, 1);
    res.json({ message: "Todo deleted", deletedTodo });
  });

module.exports = router;
