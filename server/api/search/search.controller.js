'use strict';

var _ = require('lodash');
var Search = require('./search.model');

//kickass api
var kickass = require('kickass-so');

// Get list of searchs
exports.index = function (req, res) {
    if(req.query.search)
    {
    var searchWord = req.query.search;
    var pageWord = req.query.page;
    var searchResult = '';
    kickass(searchWord, function (err, results) {
        searchResult = results;
        return res.status(200).json(searchResult);
    });
    }
    else{ return res.status(200).json([]);}
     
}

// Get a single search
exports.show = function (req, res) {


   
};

// Creates a new search in the DB.
exports.create = function (req, res) {
    Search.create(req.body, function (err, search) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(201).json(search);
    });
};

// Updates an existing search in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Search.findById(req.params.id, function (err, search) {
        if (err) {
            return handleError(res, err);
        }
        if (!search) {
            return res.status(404).send('Not Found');
        }
        var updated = _.merge(search, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(200).json(search);
        });
    });
};

// Deletes a search from the DB.
exports.destroy = function (req, res) {
    Search.findById(req.params.id, function (err, search) {
        if (err) {
            return handleError(res, err);
        }
        if (!search) {
            return res.status(404).send('Not Found');
        }
        search.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(204).send('No Content');
        });
    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}