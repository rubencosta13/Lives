
 var express = require("express"); // Var
 const port = 3000
 var app = express();
 
 //define the route for "/"
 app.get("/", function (request, response){
     response.sendFile(__dirname+"/views/index.html");
 });
 
 app.get("/getemail", function (request, response){
     var firstname = request.query.firstname
     var password  = request.query.password
 
      if (firstname === "Ruben" && password === '1234') {
         response.send("Logado como administrador!");
     } else {
         response.send("Please provide us first name");
     }
 });
 
 //start the server
 app.listen(port);
 
 console.log(`Something awesome to happen at http://localhost:${port}`);