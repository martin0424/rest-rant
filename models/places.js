const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number,
});

module.exports = mongoose.model('Places', placeSchema);

module.exports = [{
  name: 'H-Thai-ML',
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Thai, Pan-Asian',
  pic: '/images/food-1.jpg',
}, {
  name: 'Coding Cat Cafe',
  city: 'Phoenix',
  state: 'AS',
  cuisines: 'Coffee, Bakery',
  pic: '/images/restaurant.jpg',
}];
