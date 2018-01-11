'use strict';


var mongoose = require('mongoose'),
  Painting = mongoose.model('Painting');

exports.paintingindex = function(req, res) {
  Painting.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.paintingshow = function(req, res) {
    Painting.findById(req.params.id, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

exports.paintingcreate = function(req, res) {
  let new_painting = new Painting(req.body);
  new_painting.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.paintingedit = function(req, res) {
    let obj = req.body;
    let id = req.params.id
        Painting.findByIdAndUpdate(req.params.id, obj, function(err, task){
            if (err)
                res.send(err);
            res.json(task);
        })
};

exports.paintingdelete = function(req, res) {
  Painting.remove({
    _id: req.params.id
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ task: 'Painting successfully deleted' });
  });
};




