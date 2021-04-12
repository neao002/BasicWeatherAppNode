const http = require("http");

var server = http
  .createServer(function (request, response) {
    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=b97fad5ec6221ec1972242b9c1aedcb1";
    var request = require("request");
    request(url, function (err, res, body) {
      if (res.statusCode == 200) {
        console.log("its working fine");
        const data = JSON.parse(body);

        response.write("<html><body><div id='container'>");
        response.write("<h1>" + "City Name :" + data["name"] + "<br" + "<h1/>");
        response.write(
          "<h1>" + "Temperature :" + data.main["temp"] + "F" + "<br" + "<h1/>"
        );
        response.write(
          "<h3>" + "Humidity :" + data.main["humidity"] + "<br" + "<h3/>"
        );
        response.write(
          "<h3>" + "Wind:" + data.wind["speed"] + "Per hour" + "<br" + "<h3/>"
        );
        response.write("</div></body></html>");
        response.end();
      }
    });
  })
  .listen(8080);
