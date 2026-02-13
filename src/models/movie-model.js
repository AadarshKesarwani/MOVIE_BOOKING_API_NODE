import mongoose from 'mongoose';
const { Schema } = mongoose;


const movieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    //list of actors in the movie
    casts : {
        type: [String],
        required: true
    },
    //url of the movie trailer -> youtube, vimeo, etc
    trailerUrl : {
        type: String,
        required: true
    },
    language : {
        type: String,
        required: true,
        default: 'English'
    },
    //director name
    director : {
        type: String,
        required: true
    },
    //released, unreleased, blocked
    releaseStatus : {
        type: String,
        required: true,
        enum: ['RELEASED', 'UNRELEASED', 'BLOCKED']
    },

    //roman, action, comedy, horror, science fiction, documentary
    genre : {
        type: String,
    },

},{timestamps: true});


const Movie = mongoose.model('Movie', movieSchema);


module.exports = Movie;