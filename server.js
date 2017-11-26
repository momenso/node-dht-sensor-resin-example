var express = require('express');
var app = express();
var sensor = require('node-dht-sensor');

app.get('/', function (req, res) {
  sensor.read(11, 17, function(err, temperature, humidity) {
    if (!err) {
      res.send('temperature: ' + temperature.toFixed(1) + '°C, ' +
               'humidity: ' + humidity.toFixed(1) + '%'
      );
    } else {
      res.send(err);
    }
  });
});

var server = app.listen(80, function () {
  var port = server.address().port;
  console.log('Weather app listening on port ', port);
});
