const express = require("express");
let app = express();
const cors = require("cors");
const port = 3000;

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

app.get("/api", (req, res) => {
  res.json([
    {
      name: "sarveshlal",
      email: "abs@gmail.com",
    },
    {
      name: "qwerty",
      email: "abc@gmail.com",
    },
    {
      name: "zxcvbnm",
      email: "asd@gmail.com",
    },
  ]);
});
app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
