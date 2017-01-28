var React = require('react');
var {Link} = require('react-router');
var Examples = React.createClass({
  render:function(){
    return(
      <div className="caption">
        <h1>
          Examples
        </h1>
        <h3>
          Here are some Weather Examples
        </h3>
        <ul className="exLinks">
          <li>
            <Link to="/#/?location=Ahvaz">Ahvaz,IR</Link>
          </li>
          <li>
            <Link to="/#/?location=Terhan">Tehran,IR</Link>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Examples;
