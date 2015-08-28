'use strict';

var _ = require('lodash');
var SelectedFeed = require('./selectedFeed.model');

// Get list of selectedFeeds
exports.index = function(req, res) {
  SelectedFeed.find(function (err, selectedFeeds) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(selectedFeeds);
  });
};

// Get a single selectedFeed
exports.show = function(req, res) {
  SelectedFeed.findById(req.params.id, function (err, selectedFeed) {
    if(err) { return handleError(res, err); }
    if(!selectedFeed) { return res.status(404).send('Not Found'); }
    return res.json(selectedFeed);
  });
};

// Creates a new selectedFeed in the DB.
exports.create = function(req, res) {
  SelectedFeed.create(req.body, function(err, selectedFeed) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(selectedFeed);
  });
};

// Updates an existing selectedFeed in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  SelectedFeed.findById(req.params.id, function (err, selectedFeed) {
    if (err) { return handleError(res, err); }
    if(!selectedFeed) { return res.status(404).send('Not Found'); }
    var updated = _.merge(selectedFeed, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(selectedFeed);
    });
  });
};

// Deletes a selectedFeed from the DB.
exports.destroy = function(req, res) {
  SelectedFeed.findById(req.params.id, function (err, selectedFeed) {
    if(err) { return handleError(res, err); }
    if(!selectedFeed) { return res.status(404).send('Not Found'); }
    selectedFeed.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}