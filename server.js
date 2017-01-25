var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

// heres the server

app.listen(PORT,function(err){
  if(err){
  console.log(err);
}
  else {
    console.log('Server is Up on '+PORT);
  }
});
