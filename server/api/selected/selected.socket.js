/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Selected = require('./selected.model');

exports.register = function(socket) {
  Selected.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Selected.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('selected:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('selected:remove', doc);
}