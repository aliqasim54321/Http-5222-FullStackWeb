const express = require("express");
const path = require("path");

const libraries = require("")

const app = express();
const port = process.env.PORT || "8888";

app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");

app.use(express.static(path.join(__dirname,"public")));

// app.get("/",async(request,response)=>{
//     let data = await 
// });