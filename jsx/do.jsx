const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./app');
const Weather = require('./weather');
const About = require('./About');
const Examples = require('./examples');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const app = document.getElementById('app');
ReactDOM.render(<Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="about" component={About}/>
    <Route path="examples" component={Examples}/>
    <IndexRoute component={Weather}/>
  </Route>
</Router>,app);
