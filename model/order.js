var mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  quantity: String,
  createdDate: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Order', OrderSchema)