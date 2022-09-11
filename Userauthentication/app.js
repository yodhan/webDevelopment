//jshint esversion:6
require("dotenv").config()
const bodyParser = require('body-parser');
const express = require('express');
const ejs =require("ejs");
const mongoose=require("mongoose");
const encrypt =require("mongoose-encryption");

const app = express();


app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://yodhan:yod123@cluster0.qghblk0.mongodb.net/UserDB");

const userSchema=new mongoose.Schema({
    email:String,
    password:String
});
const secret=process.env.API_KEY
userSchema.plugin(encrypt,{secret:secret, encryptedFields:["password"]});
const User= new mongoose.model("User",userSchema);



app.get("/",function(req,res){
    res.render("home");
});
app.get("/register",function(req,res){
    res.render("register");
});

app.get("/submit",function(req,res){
    res.render("submit")
});

app.get("/login",function(req,res){
    res.render("login");
});



app.post("/register", function(req,res){
    const newUser= new User({
        email:req.body.username,
        password:req.body.password
    });

    newUser.save(function(err){
        if(!err)
        {
            res.render("secrets");
        }
    })

})




app.listen(3000,function(){
    console.log("server started Successfully")
})
