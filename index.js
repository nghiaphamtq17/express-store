const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app.get("/hello", (request, response, next) => {
  response.status(201).send("Hello World!");
});

app.post("/product/create", (req, res) => {
  const { name, description, price } = req.body;

  if (name && description) {
    res.status(201).json({
      msg: "Thanh cong!",
    });
  } else {
    res.status(400).json({
      msg: "Khong du",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
