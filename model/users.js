var mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  address: String,
  contact: String,
  password: String,
  createdDate: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Users', UserSchema)
