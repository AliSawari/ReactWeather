var React = require('react');
var {Link,IndexLink} = require('react-router');
var Nav = React.createClass({
  render:function(){
    return(
      <nav className="nav">
        <ul>
          <li id="navTitle">React Weather</li>
          <li><IndexLink style={{paddingLeft:'100px'}} to="/" activeClassName='active' activeStyle={{fontWeight:'bold'}}>Weather</IndexLink></li>
          <li><Link to="/examples" activeClassName='active' activeStyle={{fontWeight:'bold'}}>Examples</Link></li>
          <li><Link to="/about" activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link></li>
        </ul>
      </nav>
  );
  }
});

module.exports = Nav;
