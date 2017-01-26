var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./app');
var Weather = require('./weather');
var About = require('./About');
var Examples = require('./examples');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var enter = document.getElementById('enter');
ReactDOM.render(<Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="about" component={About}/>
    <Route path="examples" component={Examples}/>
    <IndexRoute component={Weather}/>
  </Route>
</Router>,enter);
