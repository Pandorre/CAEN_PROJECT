var rpio = require('rpio');


if (rpio.read(7)){
	document.getElementById("state").innerHTML = "ON";
}else{
	document.getelementById("state").innerHTML = "OFF";
}

