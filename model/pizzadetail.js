var mongoose = require('mongoose');

const PizzaSchema = mongoose.Schema({
  image: String,
  name: String,
  description:String,
  type:String,
  price:String,
  createdDate: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Pizza', PizzaSchema)
