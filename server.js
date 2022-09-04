const express=require("express");
const bodyparser=require("body-parser")
const https= require("https");
const { dirname } = require("path");

const app=express();
const location= "London";

app.use(bodyparser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
});


app.post("/",function(req,res){
    console.log(req.body.val1);
    var v1=Number(req.body.val1);
    var v2=Number(req.body.val2);
    var result=v1+v2;
    //res.write("Result"+result);
    res.sendFile(__dirname+"/")

});

/*app.get('/',function(req,res)
{
    const apikey="03438b2c19dd4832b9254707220209";
    const url= "https://api.weatherapi.com/v1/current.json?key="+ apikey+"&q="+ location+"";
    https.get(url,function(response){
        });
    
    });

    

});*/

app.listen(3000, function(req,res){
    console.log("Server started");
});