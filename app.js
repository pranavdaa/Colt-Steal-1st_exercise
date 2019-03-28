var express = require('express')

var app =  express();

//
// app.get('/',(req,res)=>{
//   res.send('HI there, welcome to the assignment');
// })
//
// app.get('/speak/:animal',(req,res)=>{
// if(req.params.animal === "pig"){
//   res.send("Dink")
// }
//
// else if(req.params.animal === "frog"){
//   res.send("Oink")
// }
// else if(req.params.animal === "cow"){
//   res.send("woof")
// }
// else{
//   req.send('Wrong input')
// }
// })
//
//
// app.get('/repeat/:word/:number',(req,res) =>{
//   var my = ""
//
// for (i = 0; i <= req.params.number; i++){
//
// my = my +" "+ req.params.word;
// }
//
// res.send(my)
// }
// )
// app.get('/newday',(req,res)=>{
//   var variable = "from the app.js";
//   res.render("love.ejs",{variable});
// });
const request = require('request');
app.get('/apicall',(req,res)=>{
  var query = req.query.search

  request('http://www.omdbapi.com/?s='+query+'&apikey=thewdb', function (error, response, body) {
if(!error && response.statusCode == 200) {
var data = JSON.parse(body)
  res.render("results.ejs",{data : data});
}
  });
});

app.get('/',(req,res)=>{
  res.render("search.ejs");
})
app.listen(3000);
