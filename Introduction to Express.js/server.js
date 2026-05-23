const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("running");
  res.render("index", { text: "This is your TODO" });
});

const userRouter = require("./routes/todo");

app.use("/todo", userRouter);

app.listen(4000);
