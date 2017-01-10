const mongoose = require('mongoose');

const LocationSchema = new Schema({
  name: { type: String, default: '' },
  roles: { type: Array, default: [] }
});

mongoose.model('Location', LocationSchema);