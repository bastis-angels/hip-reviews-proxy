const connection = require('../db/index.js');
const mongoose = require('mongoose');

const bookedYearSchema = new mongoose.Schema({
  Jan: Array,
  Feb: Array,
  Mar: Array,
  Apr: Array,
  May: Array,
  Jun: Array,
  Jul: Array,
  Aug: Array,
  Sep: Array,
  Oct: Array,
  Nov: Array,
  Dec: Array
});

const bookedDatesSchema = new mongoose.Schema({
  '2019': [bookedYearSchema],
  '2020': [bookedYearSchema],
  '2021': [bookedYearSchema],
  '2022': [bookedYearSchema]
});

const listingSchema = new mongoose.Schema({
  listingId: { type: Number, index: { unique: true }},
  host: String,
  bookedDates: bookedDatesSchema,
  basePrice: Number,
  occupancyFee: Number,
  cleaningFee: Number,
}, 
  {
    timestamps: true
  }
);

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;

  