const { Schema, model } = require('mongoose');

const issueSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Issue = model('Issue', issueSchema);

module.exports = Issue;
