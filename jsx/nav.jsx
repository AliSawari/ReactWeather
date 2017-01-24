var React = require('react');
var {Link,IndexLink} = require('react-router');
var Nav = React.createClass({
  render:function(){
    return(
      <div>
        <nav>
          <ul>
            <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight:'bold',padding:'5px'}}>Weather</IndexLink>
            <Link to="/messages" activeClassName='active' activeStyle={{fontWeight:'bold',padding:'5px'}}>Messages</Link>
            <Link to="/about" activeClassName='active' activeStyle={{fontWeight:'bold',padding:'5px'}}>About</Link>
          </ul>
        </nav>
      </div>
  );
  }
});

module.exports = Nav;
