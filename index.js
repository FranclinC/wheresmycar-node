var rc522 = require("rc522");

console.log("Pronto, aguardar tags");


rc522((rfidSerialNumber) => {
	console.log("Reading tag");
	console.log(rfidSerialNumber);
});


