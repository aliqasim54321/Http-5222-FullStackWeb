//import required modules
const express = require("express");
const path = require("path");
const { title } = require("process");

//set up Express object and port
const app = express();
const port = process.env.PORT || "7777"; 

//settings for Express app
app.set("views",path.join(__dirname,"views"));//setting for "views" is set to path:__dirname/views
app.set("view engine","pug");

//Setup folder for static files 
app.use(express.static(path.join(__dirname,'public')));


//text message
app.get("/",(request,response)=>{
// res.status(200).send("E-commerce  is live website");
response.render("index",{title:"Home"})
});

app.get ("/products",(request,response)=>{
    response.render("products",{title:"product"})
})

app.get("/about", (request, response) => {
    response.render("about", { title: "About Us" });
});


//set up server Listening
app.listen(port,()=>{
console.log(`Listening on http://localhost:${port}`);
});