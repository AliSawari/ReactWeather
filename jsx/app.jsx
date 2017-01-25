var React = require('react');
var Nav = require('./nav');
var App = React.createClass({
  render:function(){
    return (
      <div>
      <Nav/>
      <h1 className="app">This is the App Component</h1>
      {this.props.children}
      </div>
    );
  }
});

module.exports = App;
