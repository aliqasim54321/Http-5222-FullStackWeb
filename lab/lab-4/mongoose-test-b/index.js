const express = require("express");
const path = require("path"); //needed when setting up static/file paths
const dotenv = require("dotenv");

//load the environment variables from .env
dotenv.config();

const db = require("./modules/movies/db"); //load db.js

//set up the Express app
const app = express();
const port = process.env.PORT || "8888";

//set up application template engine
app.set("views", path.join(__dirname, "views")); //the first "views" is the setting name
//the second value above is the path: __dirname/views
app.set("view engine", "pug");

//set up folder for static files
app.use(express.static(path.join(__dirname, "public")));

//USE PAGE ROUTES FROM ROUTER(S)
app.get("/", async (request, response) => {
  let movieList = await db.getmovies();
  //if there's nothing in the movies collection, initialize with some content then get the movies again
  if (!movieList.length) {
    await db.initializemovies(); 
    movieList = await db.getmovies();
  }
  console.log(movieList);
  response.render("index", { movies: movieList });
});
// app.get("/add", async (request, response) => {
//   //create and add a new pet
//   await db.addPet("Spot", "dog", "Dalmatian", 7);
//   response.redirect("/");
// });
app.get("/update", async (request, response) => {
  //update Spot's name to Spot II
  await db.updateMovieRating("Musk", "G");
  response.redirect("/");
})

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
}); 

