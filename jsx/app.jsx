var React = require('react');
var Nav = require('./nav');
var SlideMenu = require('./slidemenu');
var App = React.createClass({
  render:function(){
    return (
      <div>
      <Nav/>
      {this.props.children}
      <SlideMenu />
    </div>
    );
  }
});

module.exports = App;
