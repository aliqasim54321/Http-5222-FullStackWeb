var express = require("express");
var router = express.Router();

var model = require("./func");

//convert query string formats in form data to JSON format
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//SET UP PAGE PATHS
//The home page's app.get callback function has to be asynchronous because it's using an asynchronous function inside it.
router.get("/", async (request, response) => {
  let links = await model.getLinks();
  //console.log(links);
  response.render("index", { title: "Home", menu: links });
});
router.get("/about", async (request, response) => {
  let links = await model.getLinks();
  response.render("about", { title: "About", menu: links });
})

//ADMIN PAGE ROUTES
router.get("/admin/menu", async (request, response) => {
  let links = await model.getLinks();
  response.render("menu-list", { title: "Administer menu links", menu: links })
})
router.get("/admin/menu/add", async (request, response) => {
  let links = await model.getLinks();
  response.render("menu-add", { title: "Add menu link", menu: links });
})
//path for processing the create form
router.post("/admin/menu/add/submit", async (request, response) => {
  //query string format: weight=0&path=...contact&name=...
  //make data accessible as if it was a JSON object via lines 22-23
  //POST form data is passed via the body (request.body)
  let wgt = request.body.weight; //weight is the name of the weight field in the form
  let href = request.body.path; //URI field data
  let text = request.body.name; //link text field

  let newLink = {
    weight: wgt,
    path: href,
    name: text
  }
  await model.addLink(newLink);
  response.redirect("/admin/menu");
})
//path for processing the delete form
router.get("/admin/menu/delete", async (request, response) => {
  //get the link _id
  //for a GET form, the data is passed in the query string of the URL (request.query)
  let id = request.query.linkId;

  //execute the function to delete by _id
  await model.deleteLink(id);
  //redirect back to main menu link admin page
  response.redirect("/admin/menu");
})

module.exports = router;