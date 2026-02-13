const { Movie } = require("../models");




const createMovie = async (data) => {
  try {
    const movie = await Movie.create(data);
    return movie;
  } catch (error) {
    if (error.name === "ValidationError") {
      const err = Object.fromEntries(
        Object.entries(error.errors).map(([key, val]) => [key, val.message]),
      );
      return { err, statusCode: 422 };
    } else {
      throw error;
    }
  }
};



const getMovieById = async (id) => {
  const movie = await Movie.findById(id);
  if (!movie) {
    return {
      err: "no movie found with the given id",
      statusCode: 404,
    };
  }
  return movie;
};




const updateMovie = async (id, data) => {
  try {
    const movie = await Movie.findOneAndReplace({ _id: id }, data, {
      new: true,
      runValidators: true,
    });

    if (!movie) {
      return {
        err: "no movie found with the given id",
        statusCode: 404,
      };
    }

    return movie;
  } catch (error) {
    // mongoose schema validation errors
    if (error.name === "ValidationError") {
      const err = Object.fromEntries(
        Object.entries(error.errors).map(([key, val]) => [key, val.message]),
      );

      return {
        err,
        statusCode: 422,
      };
    }

    // unknown / system errors
    throw error;
  }
};





const deleteMovie = async (id) => {
  const movie = await Movie.findByIdAndDelete(id);
  if (!movie) {
    return {
      err: "no movie found with the given id",
      statusCode: 404,
    };
  }
  return movie;
};





module.exports = {
  createMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
};
