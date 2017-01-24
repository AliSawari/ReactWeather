var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(express.static('public'));

// heres the server

app.listen(3000,function(err){
  if(err){
  console.log(err);
}
  else {
    console.log('Server is Up on 3000');
  }
});
