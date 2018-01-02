'use strict';

module.exports = function (app) {
    let paintingList = require('../controllers/PaintingsController');
    app.route('/paintings')
        .get(paintingList.list_all_paintings)
            .post(paintingList.create_a_painting);
    app.route('paintings/:paintingId')
        .get(paintingList.read_a_painting);

};