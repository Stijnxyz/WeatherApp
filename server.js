const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

//localhost test & app code [6/18/2019]
app.get('/', function (req, res) {
  res.render('index')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
