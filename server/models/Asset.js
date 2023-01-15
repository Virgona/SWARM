const mongoose = require('mongoose');

const { Schema } = mongoose;

const assetSchema = new Schema({
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
  video: {
    type: String,
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

const Asset = mongoose.model('Asset', assetSchema);
module.exports = Asset;