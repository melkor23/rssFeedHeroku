/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var SelectedFeed = require('./selectedFeed.model');

exports.register = function(socket) {
  SelectedFeed.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  SelectedFeed.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('selectedFeed:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('selectedFeed:remove', doc);
}