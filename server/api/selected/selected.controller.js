'use strict';

var _ = require('lodash');
var Selected = require('./selected.model');

// Get list of selecteds
exports.index = function(req, res) {
  Selected.find(function (err, selecteds) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(selecteds);
  });
};

// Get a single selected
exports.show = function(req, res) {
  Selected.findById(req.params.id, function (err, selected) {
    if(err) { return handleError(res, err); }
    if(!selected) { return res.status(404).send('Not Found'); }
    return res.json(selected);
  });
};

// Creates a new selected in the DB.
exports.create = function(req, res) {
  Selected.create(req.body, function(err, selected) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(selected);
  });
};

// Updates an existing selected in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Selected.findById(req.params.id, function (err, selected) {
    if (err) { return handleError(res, err); }
    if(!selected) { return res.status(404).send('Not Found'); }
    var updated = _.merge(selected, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(selected);
    });
  });
};

// Deletes a selected from the DB.
exports.destroy = function(req, res) {
  Selected.findById(req.params.id, function (err, selected) {
    if(err) { return handleError(res, err); }
    if(!selected) { return res.status(404).send('Not Found'); }
    selected.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}