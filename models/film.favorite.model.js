var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var filmFavoriteSchema = new Schema({
    _id: Number,
    favorite: Boolean
});

var FilmFavorite = mongoose.model('FilmFavorite', filmFavoriteSchema);

module.exports = FilmFavorite;