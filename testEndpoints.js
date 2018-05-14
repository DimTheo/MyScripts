//Dimos Theodosopoulos @ https://github.com/DimTheo
const jsJoda = require('js-joda').use(require('js-joda-timezone')).use(require('js-joda-extra'));
const request = require('request');

const {
    ZonedDateTime,
    ZoneId,
} = jsJoda;

setInterval(function(){
		var value1 = Math.floor(Math.random()*100);
		//var value2 = Math.floor(Math.random()*100);
		var time = ZonedDateTime.now(ZoneId.of("Z")).toString();
		request({
			method: 'POST',
			uri: uri,
			headers: {
				'content-type':'application/json',
				'Authorization':  authorization
			},
			body: {
				"measurementTime": time,
				"measurementValue": value1,
				"sensorID": "5af4061b1ffdfe0e941ddf28"
			},
			json: true
		});
}, 5000);




	