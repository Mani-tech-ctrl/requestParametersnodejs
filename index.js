const express = require("express");
const app =   express();

let port = 8000;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});



app.get("/", (req, res) => {
    console.log(req.params);
    res.send("Hello, i am root path");
});

app.get('/:username/:id', (req, res) =>{
    let {username, id } = req.params;
    res.send(`welcome@${username}${id} Update your task`);

});






//listen all request
// app.use((req, res)=>{
//     console.log("request received");
//     let code = "<h1>Student's Name <h1> <ul>Asutosh</ul> <ul>Abhishek</ul> <ul>Poonam</ul> <ul>Kavita</ul> <ul>Rahul</ul>";
//     res.send(code);
// });


