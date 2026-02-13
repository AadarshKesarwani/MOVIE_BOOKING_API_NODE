const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 1,
    },

    releaseDate: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
      minLength: 5,
      trim: true,
    },

    // list of actors in the movie
    casts: {
      type: [String],
      required: true,
    },

    // url of the movie trailer -> youtube, vimeo, etc
    trailerUrl: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      required: true,
      default: "English",
    },

    // director name
    director: {
      type: String,
      required: true,
      trim: true,
    },

    // RELEASED | UNRELEASED | BLOCKED
    releaseStatus: {
      type: String,
      default: "UNRELEASED",
      enum: ["RELEASED", "UNRELEASED", "BLOCKED"],
    },

    // romance, action, comedy, horror, science fiction, documentary
    genre: {
      type: String,
      enum: [
        "ROMANCE",
        "ACTION",
        "COMEDY",
        "HORROR",
        "SCI_FI",
        "DOCUMENTARY",
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
