'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const PaintingSchema = new Schema({
    title: {
        type: String,
        Required: 'Titel van je kunstwerk'
    },
    artist: {
        type: String,
        Required: 'Jouw naam/pseudo'
    },
    imageUrl: {
        type: String,
        Required: 'Url'
    },
    created_at:{
        type: Date,
        default :Date.now

    },

});
module.exports = mongoose.model('Painting', PaintingSchema);