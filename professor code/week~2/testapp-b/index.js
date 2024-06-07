const express = require("express");
const path = require("path"); //needed when setting up static/file paths

//set up the Express app
const app = express();
const port = process.env.PORT || "8888";

//set up application template engine
app.set("views", path.join(__dirname, "views")); //the first "views" is the setting name
//the second value above is the path: __dirname/views
app.set("view engine", "pug");

//set up folder for static files
app.use(express.static(path.join(__dirname, "public")));

//SET UP PAGE PATHS
app.get("/", (request, response) => {
  //response.status(200).send("Test");
  response.render("index", { title: "Home" });
});
app.get("/about", (request, response) => {
  response.render("about", { title: "About" });
})

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
}); 