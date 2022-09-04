const express = require("express");
const https= require("https");
const bodyparser=require("body-parser");

const app=express();
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("public"));
app.set("view engine",'ejs');


var list=[]
var workItems=[]
app.get("/",function(req,res){
    var today=new Date();
    options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day=today.toLocaleDateString("en-US",options);
    res.render("list",{listTitle:day,list:list});
});

app.post("/",function(req,res){
    var s=req.body.val1;
    console.log(req.body)
    if (req.body.list ==="work")
    {
        workItems.push(s)
        res.redirect("/work")
    }
    else
    {
        list.push(s)
        res.redirect("/");
    }

})



app.get("/work",function(req,res){
    res.render("list",{listTitle:"work",list:workItems});
});


app.listen(300,function(){
    console.log("server started")
})