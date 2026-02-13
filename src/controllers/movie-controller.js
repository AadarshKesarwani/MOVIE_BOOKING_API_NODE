const { movieService } = require('../services');

const createMovie = async (req, res) => {
  try {
    const response = await movieService.createMovie(req.body);

    if (response.err) {
      return res.status(response.statusCode || 422).json({
        success: false,
        data: {},
        err: response.err,
        message: "validation error while creating movie",
      });
    }

    return res.status(201).json({
      success: true,
      data: response,
      err: {},
      message: "movie created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "Failed to create movie",
    });
  }
};

const getMovie = async (req, res) => {
  try {
    const response = await movieService.getMovieById(req.params.id);

    if (response.err) {
      return res.status(response.statusCode || 404).json({
        success: false,
        data: {},
        err: response.err,
        message: "Movie not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: response,
      err: {},
      message: "Movie fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "Failed to fetch movie",
    });
  }
};


const updateMovie = async (req, res) => {
  try {
    const response = await movieService.updateMovie(
      req.params.id,
      req.body
    );

    if (response.err) {
      return res.status(response.statusCode || 404).json({
        success: false,
        data: {},
        err: response.err,
        message: "Failed to update movie",
      });
    }

    return res.status(200).json({
      success: true,
      data: response,
      err: {},
      message: "Movie updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "Internal server error",
    });
  }
};


const deleteMovie = async (req, res) => {
  try {
    const response = await movieService.deleteMovie(req.params.id);

    if (response.err) {
      return res.status(response.statusCode || 404).json({
        success: false,
        data: {},
        err: response.err,
        message: "Failed to delete movie",
      });
    }

    return res.status(200).json({
      success: true,
      data: response,
      err: {},
      message: "Movie deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "Failed to delete movie",
    });
  }
};

module.exports = {
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
};
