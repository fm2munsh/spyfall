var rooms = require('../app/controllers/rooms');

module.exports = function (app) {

  console.log('Loading express routes...');


  app.get('/status', function(req, res) { res.sendStatus(200); });

  // --- Rooms
  app.get('/rooms', rooms.index);
  app.post('/rooms', rooms.create);
  app.delete('/rooms/:id', rooms.destroy);
};
