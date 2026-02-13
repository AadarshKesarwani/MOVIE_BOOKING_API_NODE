const validateMovieCreateRequest =  (req, res, next) => {
        const badRequestResponse = {
        success: false,
        err: "",
        data: {},
        message: "Malformed Request | Bad Request"
    };
    // validate the movie name
    if(!req.body.name) {
        badRequestResponse.err = "The name of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    // validate the movie description
    if(!req.body.description) {
        badRequestResponse.err = "The description of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    // validate the movie casts
    if(!req.body.casts || 
       !(req.body.casts instanceof Array) ||
       req.body.casts.length <= 0
    ) {
        badRequestResponse.err = "The casts of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    // validate the movie trailer url
    if(!req.body.trailerUrl) {
        badRequestResponse.err = "The trailerUrl of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    // validate the release date of the movie
    if(!req.body.releaseDate) {
        badRequestResponse.err = "The releaseDate of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }

    // validate director of the movie
    if(!req.body.director) {
        badRequestResponse.err = "The director of the movie is not present in the request";
        return res.status(400).json(badRequestResponse);
    }
    next();
}



const validateMovieUpdateRequest = (req, res, next) => {
  const badRequestResponse = {
    success: false,
    data: {},
    err: "",
    message: "Malformed PUT request",
  };

  const {
    name,
    releaseDate,
    description,
    casts,
    trailerUrl,
    director,
    releaseStatus,
    genre,
  } = req.body;

  if (!name || name.trim().length === 0) {
    badRequestResponse.err = "Movie name is required";
    return res.status(400).json(badRequestResponse);
  }

  if (!releaseDate) {
    badRequestResponse.err = "Release date is required";
    return res.status(400).json(badRequestResponse);
  }

  if (!description || description.trim().length < 5) {
    badRequestResponse.err = "Description must be at least 5 characters";
    return res.status(400).json(badRequestResponse);
  }

  if (!casts || !Array.isArray(casts) || casts.length === 0) {
    badRequestResponse.err = "Casts must be a non-empty array";
    return res.status(400).json(badRequestResponse);
  }

  if (!trailerUrl) {
    badRequestResponse.err = "Trailer URL is required";
    return res.status(400).json(badRequestResponse);
  }

  if (!director || director.trim().length === 0) {
    badRequestResponse.err = "Director name is required";
    return res.status(400).json(badRequestResponse);
  }

  const allowedStatus = ["RELEASED", "UNRELEASED", "BLOCKED"];
  if (releaseStatus && !allowedStatus.includes(releaseStatus)) {
    badRequestResponse.err = "Invalid releaseStatus";
    return res.status(400).json(badRequestResponse);
  }

  const allowedGenres = [
    "ROMANCE",
    "ACTION",
    "COMEDY",
    "HORROR",
    "SCI_FI",
    "DOCUMENTARY",
  ];
  if (genre && !allowedGenres.includes(genre)) {
    badRequestResponse.err = "Invalid genre";
    return res.status(400).json(badRequestResponse);
  }

  next();
};









module.exports = {
    validateMovieCreateRequest,
    validateMovieUpdateRequest
}