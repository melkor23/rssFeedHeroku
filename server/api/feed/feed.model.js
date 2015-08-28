'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FeedSchema = new Schema({

    title: String,
    link: String,
    description: String,
    author: String,
    pubDate: Date
});

module.exports = mongoose.model('Feed', FeedSchema);