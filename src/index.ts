import express from "express";
const app = express();

const port = process.env.PORT || 3003;

app.get("/", (req, res) => {
  res.json("hello world");
});

app.get("/favicon.ico", (req, res) => {
  res.json("hello world");
});

app.listen(port, () => {
  console.log(`server is running on ${port} port`);
});
