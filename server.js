var   join = require('path').join,
      express = require('express'),
      mongoose = require('mongoose'),
      models = join(__dirname, 'app/models'),
      app = express(),
      port = process.env.port || 3000;


require('./config/routes')(app);

app.listen(port);

console.log("Listening on port: " + port);
