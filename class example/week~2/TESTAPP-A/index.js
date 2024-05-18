const express = require("express")
const path = require("path"); 
const { title } = require("process");
const app = express();
const port = process.env.PORT ||"8888"
//Settings for express app
app.set("views",path.join(__dirname,"views"));//setting for "views" is set path : __dirname/views
app.set("view engine","pug");

app.use(express.static(path.join(__dirname,"public")));

//SET UP PAGE ROUTE
app.get("/",(request,response) =>{
   // response.status(200).send("testing");
   response.render("index",{title:"Home"});
});
app.get("/about",(request,response)=>{

    response.render("about",{title:"about"});
});

app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`);
})