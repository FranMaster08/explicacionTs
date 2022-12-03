const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("");
});
app.listen(9000, () => console.log("listening on"));
