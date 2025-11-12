const express = require("express");
const app = express();
const path = require("path"); //to view directory
const port = 8000;



//view  template
app.set("view engine", "ejs"); //view folder name by deafult seached by express
app.set("views", path.join(__dirname, "/views"));


app.get("/", (req, res) =>{
    res.render("home.ejs");    //render = send files
                                 
})


app.get("/hello", (req, res) => {
    res.send("hello");
});



app.listen(port, () => {
    console.log(`listening on port ${port}`);
}); 

//res.semd = string array html boolean obj not in case large file