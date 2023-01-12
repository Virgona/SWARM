const { Schema, model } = require('mongoose');

const workOrderSchema = new Schema({
  _id: {

  },
  contractor: {
    //whis is or has done the work
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  asset: {
    //referancing asset schema
    type: Number,
    required: true,
    trim: true
  },
  cctvFootage: {
    //link to display or upload cctv footage
    type: String,
    trim: true
  },
  reviewed: {
    //yes or no if video has been watched
    type: String,
    required: true,
    trim: true
  },
  assesed: {
    //how far down the asset was able to be cctved
    type: String,
    required: true,
    trim: true
  },
  acessibility: {
    //is the asset easily accesible or in high traffic area
    type: String,
    required: true,
    trim: true
  },
  reviewer: {
    //person tasked to review video and create work order
    type: String,
    required: true,
    trim: true
  },
  cctvQuality: {
    //good / fair / poor
    type: String,
    required: true,
    trim: true
  },
  cctvViewed: {
    //was it reviewed (pre / post / pre & post)
    type: String,
    required: true,
    trim: true
  },
  additionalNotes: {
    //is asset good for now or work needed (work needed @***meters from ****** asset)
    type: String,
    trim: true
  },



});

const WorkOrder = model('WorkOrder', workOrderSchema);
module.exports = WorkOrder;