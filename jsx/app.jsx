var React = require('react');
var Nav = require('./nav');
var App = React.createClass({
  render:function(){
    return (
      <div>
      <Nav/>
      {this.props.children}
      </div>
    );
  }
});

module.exports = App;
