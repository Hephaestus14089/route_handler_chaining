const express = require('express');
const app = express();
const PORT = 4000;

const one = (req, res, next) => {
  console.log("one");
  next();
};
const two = (req, res, next) => {
  console.log("two");
  next();
};
const three = (req, res) => {
  console.log("three");
  res.send("finished.");
};

app.get('/', [one, two, three]);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
