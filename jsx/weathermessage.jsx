var React = require('react');

var WeatherMessage = React.createClass({
  render:function(){
    var {Loc,Temp,Max,Min,Humid,Press} = this.props;
    return(
      <div className="weatherMsg">
      <h1>
        It's {Temp} C in {Loc}
      </h1>
      <h3>Maximum Temp : {Max} c</h3>
      <h3>Minimum Temp : {Min} c</h3>
      <h3>Humidity : {Humid} %</h3>
      <h3>Pressure : {Press} hpa</h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;
