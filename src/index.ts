import express from "express";
const app = express();

const port = 3003;

app.get("/", (req, res) => {
  res.json("hello world");
});

app.listen(port, () => {
  console.log(`server is running on ${port} port`);
});
