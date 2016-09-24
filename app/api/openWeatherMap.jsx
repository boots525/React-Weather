var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=17ac230fefe2459ddef2b4d0fd25213c&units=imperial'; 

//API key: 17ac230fefe2459ddef2b4d0fd25213c

module.exports= {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res){
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp.toFixed(1);				
			}
		}, function (res){
			throw new Error(res.data.message)
		})
	}

}