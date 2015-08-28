'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SelectedFeedSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('SelectedFeed', SelectedFeedSchema);