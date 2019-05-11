const express = require('express');
const path = require('path');
const app = express();
var gpio = require('rpi-gpio');
var rpio = require('rpio');

gpio.setup(7, gpio.DIR_OUT);
gpio.setup(11, gpio.DIR_OUT);
gpio.setup(13, gpio.DIR_OUT);
gpio.setup(15, gpio.DIR_OUT);

app.use('/static', express.static('public'));

app.use('/origin', express.static('/home/pi/Project'));

app.get('/', function(req, res){ 
        res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/led/on', function(req, res){
	gpio.write(7, true, function(err) {
        if (err) throw err;
        console.log('True 7');
	return;
    });
	gpio.write(7, false, function(err) {
        if (err) throw err;
        console.log('False 7');
        return;
    });
});

app.post('/broy/on', function(req, res){
        gpio.write(11, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
        return;
    });
        gpio.write(11, false, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
        return;
    });
});

app.post('/force/on', function(req, res){
        gpio.write(13, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
        return;
    });
        gpio.write(13, false, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
        return;
    });
});

app.post('/tasse/on', function(req, res){
        gpio.write(15, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
        return;
    });
        gpio.write(15, false, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
        return;
    });
});


app.listen(8080);
