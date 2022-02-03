let express = require('express');
let mongoose = require('mongoose');

mongoose.connect('mondodb://localhost', (err) => {
  console.log(err ? err : 'Connected To Data Base');
});

let app = express();

app.get('/', (req, res) => {
  res.send('<h1>Welcome</h1>');
});
app.listen(3900);
