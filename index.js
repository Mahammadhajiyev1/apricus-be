require("dotenv").config();
const express = require("express");
const cors = require("cors");
const postController = require("./controller/postsController");

const app = express();
app.use(cors());
const PORT = process.env.PORT;

app.get("/api/posts", async (req, res) => {
  try {
    const result = await postController.getPosts();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running,   and App is listening on port " + PORT
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
