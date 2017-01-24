var React = require('react');

var WeatherForm = React.createClass({
  Get:function(event){
    event.preventDefault();
    var Loc = this.refs.inp.value;
    if(Loc.length>0){
      this.refs.inp.value = "";
      this.props.Get(Loc);
    } else {
      this.props.warn();
    }
  },
  render:function(){
    return(
      <form onSubmit={this.Get}>
        <input type="text" ref="inp" autoComplete="on" />
        <button>Get Weather</button>
      </form>
    )
  }
});

module.exports = WeatherForm;
