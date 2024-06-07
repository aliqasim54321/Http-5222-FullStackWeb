const mongoose = require("mongoose");

//const dbUrl = `mongodb://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?authSource=testdb`;
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

//set up Schema and model
const movieSchema = new mongoose.Schema({
  title: String,
  year:Date,
  Rating: String,
});
const movie = mongoose.model("movie", movieSchema);

//MONGODB FUNCTIONS
async function connect() {
  await mongoose.connect(dbUrl); //connect to mongodb
}

//Get all movies from the movies collection
async function getmovies() {
  await connect();
  return await movie.find({}); //return array for find all
}
//Initialize movies collection with some data.
async function initializemovies() {
  await connect();
  const movieList = [
    {
      title: "Raw",
      year: '2001-01-01',
      Rating: "G",
    },
    {
      title: "AGent",
      year: '2001-01-01',
      Rating: "PG",
    },
    {
      title: "Musk",
      year: 2024,
      Rating: "R",    }
  ];
  await movie.insertMany(movieList);
}

//Function to update movie name.
async function updateMovieRating(title, newRating) {
  await connect();
  await movie.updateOne(
    { title: title },
    { Rating: newRating }
  );
}


//Function to delete movie name.
async function deleteMoviesByRating(R){
  await connect();
  await movie.deletMany(
    { Rating: "R" }
  );
}

module.exports = {
  deleteMoviesByRating,
  updateMovieRating,
  initializemovies,
  getmovies
}