const express = require("express");
const app = express();

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.use("/", (req, res) => {
  res.send("home page");
});

app.listen(3002, () => {
  console.log(`Server is running on port 3002`);
});
