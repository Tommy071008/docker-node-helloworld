var express = require("express");

var PORT = 9001;

var app = express();
app.get('/', (req, res) => {
  res.send('fly!');
});

app.listen(PORT);
