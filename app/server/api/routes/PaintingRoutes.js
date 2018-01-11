'use strict';
module.exports = function(app) {
  let paintings = require('../controllers/PaintingsController');


  // user List Routes
  app.route('/paintings')
    .get(paintings.paintingindex)
    .post(paintings.paintingcreate);

  app.route('/paintings/:id')
    .get(paintings.paintingshow)
    .put(paintings.paintingedit)
    .delete(paintings.paintingdelete);

};