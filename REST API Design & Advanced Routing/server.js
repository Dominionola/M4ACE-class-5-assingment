const express = require("express");

const app = express();

app.use(express.json());

const userRouter1 = require("./routes/v1/users");
const postRouter1 = require("./routes/v1/posts");
const commentRouter1 = require("./routes/v1/comments");

const errorHandler = require("./middleware/errorHandler")

app.use("/api/v1/users", userRouter1);
app.use("/api/v1/posts", postRouter1);
app.use("/api/v1/comments", commentRouter1Router1);

app.use(errorHandler);

app.listen(3000, () => console.log("API is running in Port 3000"));
