'use strict';

let mongoose = require('mongoose'),
    Painting = mongoose.model('Paintings');


exports.list_all_paintings = function (req, res) {

    Painting.find({}, function (err, painting) {
        if (err)
            res.send(err);
        res.json(painting);
    });
};

exports.create_a_painting = function (req, res) {
    let new_painting = new Painting(req.body);
    new_painting.save(function (err, painting) {

        if (err)
            res.send(err);
        res.json(painting);
    });
};

exports.read_a_painting = function (req, res) {

    Painting.findById(req.params.paintingId, function (err, painting) {
        if (err)
            res.send(err);
        res.json(painting);
    });
};