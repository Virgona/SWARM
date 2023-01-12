const { Schema, model } = require('mongoose');

const assetSchema = new Schema({
  _id: {

  },
  number: {
    //asset number
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  length: {
    //asset length in meters
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  area: {
    //north / south / east / west
    type: String,
    required: true,
    trim: true
  },
  priority: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    required: true,
    trim: true
  },


});

const Asset = model('Asset', assetSchema);
module.exports = Asset;