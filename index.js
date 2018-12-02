var axios = require("axios");
var onoff = require('onoff');
var rc522 = require("rc522");

var Gpio = onoff.Gpio,

ledA = new Gpio(20, "out");
ledV = new Gpio(16, "out");

console.log("Pronto, aguardar tags");
const baseAPI = "http://ec2-54-69-43-225.us-west-2.compute.amazonaws.com:8080/api/card/";
const mockAPI = "https://httpbin.org/ip";
const localAPI = "http://10.0.81.41:8080/api/card/";

rc522((rfidSerialNumber) => {
	const params = {
		"sectionCode": "D-42",
	}

	// console.log(rfidSerialNumber);
	axios.put(baseAPI + rfidSerialNumber, params)
		.then((_) => {
			ledV.write(0, () => { console.log("Led vermelho desligado") });
			ledA.write(1, () => { 
				setTimeout(() => ledA.writeSync(0), 3000);
			});
		})
		.catch((error) => {
			console.log(error);
			ledV.write(1, () => { 
				setTimeout(() => ledA.writeSync(0), 3000);
			});
			ledA.write(0, () => { console.log("Led amarelo desligado") });
		});
});


