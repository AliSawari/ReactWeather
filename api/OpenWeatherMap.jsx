var axios = require('axios');
const OPEN_WEATHER_MAP = 'http://api.openweathermap.org/data/2.5/weather?&appid=2914930aae4aa1f193664bc4636428ff&units=metric';
var fetch = {
  getTemp:function(Loc){
    var encURL = encodeURIComponent(Loc);
    var ReqURL = `${OPEN_WEATHER_MAP}&q=${encURL}`;
    return axios.get(ReqURL).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error("City not Found");
      } else {
        return res.data.main;
      }
    },function(res){
      throw new Error("404 Not Found");
    });
  }
}
module.exports = fetch;
