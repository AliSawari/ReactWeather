var React = require('react');
var WeatherForm = require('./weatherform');
var WeatherMessage = require('./weathermessage');
var Opw = require('./../api/OpenWeatherMap');
var Weather = React.createClass({
  getInitialState:function(){
    return {
      isLoad :false,
      status:''
    }
  },
  Get:function(Loc){
    var W = this;
    W.setState({
      isLoad:true
    });
    Opw.getTemp(Loc).then(function(main){
      var temp = main.temp,
      humid = main.humidity,
      max = main.temp_max,
      min = main.temp_min,
      press = main.pressure;
      W.setState({
        Loc:Loc,
        Temp:temp,
        Humid:humid,
        Max:max,
        Min:min,
        Press:press,
        isLoad:false,
        status:"success"
      });
    },function(harchi){
      W.setState({Loc:false,isLoad:false,status:'Error Fetching Data!'});
      alert(harchi);
    });
  },
  warn:function(){
    var {status} = this.state;
    this.setState({
      status:"Please Input a Valid City Name",
      Loc:false
    });
    return <h3 className="weatherMsg">{status}</h3> ;
  },
  render:function(){
    var {isLoad,status,Loc,Temp,Max,Min,Humid,Press} = this.state;
    function Decide(){
      if(isLoad){
        return <h3 className="weatherMsg">Fetching Weather...</h3>
      } else if(Loc) {
         return (<WeatherMessage Loc={Loc} Temp={Temp}
          Max={Max} Min={Min} Humid={Humid} Press={Press}/> );
        }
        else if(!Loc && !isLoad){
          return <h3 className="weatherMsg">{status}</h3>
          }
        else if(warn()){
        return warn();
      }
    }
    return(
      <div>
        <h1 className="caption">
          Get Weather
        </h1>
        <WeatherForm warn={this.warn} Get={this.Get}/>
        {Decide()}
      </div>
    );
  }
});
// just use a little comment here
module.exports = Weather;
