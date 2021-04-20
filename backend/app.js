
const express = require('express');
// const adminData = require("./src/model/adminData");
const kdramaData = require("./src/model/Kdramadata");
const authorData = require("./src/model/Authordata");
const reviewData = require("./src/model/reviewData");
const userData = require("./src/model/userData");
const cors = require("cors");
// var bodyparser = require("body-parser");
const jwt = require('jsonwebtoken');
var app = new express();
app.use(cors());

app.use(express.json());
adminusername="admin@gmail.com"
adminpassword="123456"

// function verifyToken(req, res, next) {
//     if(!req.headers.authorization) {
//       return res.status(401).send('Unauthorized request')
//     }
//     let token = req.headers.authorization.split(' ')[1]
//     if(token === 'null') {
//       return res.status(401).send('Unauthorized request')    
//     }
//     let payload = jwt.verify(token, 'secretKey')
//     if(!payload) {
//       return res.status(401).send('Unauthorized request')    
//     }
//     req.userId = payload.subject
//     next()
//   }
// app.post("/admin",verifyToken,(req,res)=>{
  app.post("/admin",(req,res)=>{
    let adminData = req.body;

    if(adminusername != adminData.adminusername)
    {
        res.status(401).send("Invalid admin");
    }
    else if(adminpassword !== adminData.adminpassword) 
    {
        res.status(401).send("Invalid password");
    }
    else
    {
         
        let payload = {subject: adminusername + adminpassword}
        let token = jwt.sign(payload, 'secretKey')  
        res.status(200).send({token})
    }
})

app.get('/kdramas',function(req,res){
    
  kdramaData.find()
              .then(function(kdrama){
                  res.send(kdrama);
              });
});
app.get('/authors',function(req,res){
    
    authorData.find()
                .then(function(author){
                    res.send(author);
                });
  });

app.post('/add', function(req,res){
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS');
  console.log(req.body);
  var item = {
      _id: req.body.kdramas.id,
      title: req.body.kdramas.title,
      genre: req.body.kdramas.genre,
      description: req.body.kdramas.description,
      image: req.body.kdramas.image
  }
  var kdramas = kdramaData(item);
  kdramas.save();
})

app.post('/addauthor', function(req,res){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS');
    console.log(req.body);
    var item = {
        _id: req.body.authors.id,
        description: req.body.authors.description,
        title: req.body.authors.title,
        genre: req.body.authors.genre,
        
        image: req.body.authors.image
    }
    var authors = authorData(item);
    authors.save();
  })

app.post('/updatekdrama', function(req,res){
    id = req.body.kdramas._id;
    title = req.body.kdramas.title;
    author = req.body.kdramas.author;
    genre = req.body.kdramas.genre;
    description = req.body.kdramas.description;
    image = req.body.kdramas.image;
    console.log(title);
    kdramaData.findByIdAndUpdate( id, {"title": title,  "genre": genre, "description": description, "image": image})
    .then(kdrama=>{
     if(kdrama){
         res.send(); }
     })
 })

 app.post('/deletekdrama', function(req,res){
    console.log(req.body);
    id = req.body.kdramas._id;
    kdramaData.findByIdAndDelete({"_id": id})
    .then(()=>{
        res.send();
    })
 })

 //user
 app.post('/adduser', function(req,res){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS');
    // console.log(req.body);
    var item = {
        name: req.body.user.name,
        email: req.body.user.email,
        password: req.body.user.password,
        review: []
    }

    console.log(item);

    userData.findOne({email: item.email, password: item.password})
    .then(user=>{
        console.log(user)
        if(user){
            let message = "Failed";
            console.log(message);
            res.status(200).send({message});
        }
        else{
            var user = userData(item);
            user.save();
            console.log("Created");
            let message = "Success";
            res.status(200).send({message});            
        }
    })
    
})

app.post("/user", (req,res)=>{

    console.log("OK")
    let item = {
        email: req.body.useremail,
        password: req.body.userpass
    }

    userData.findOne({email: item.email, password: item.password})
    .then(user=>{
        if(user){
            let payload = {subject: user.email + user.password}
        let usertoken = jwt.sign(payload, 'secretKey')  
        let id = user._id
        let message = "Success"
        res.status(200).send({usertoken, id, message})
        }
        // let payload = {subject: user.email + user.password}
        // let usertoken = jwt.sign(payload, 'secretKey')  
        // let id = user._id
        // let message = "Success"
        // res.status(200).send({usertoken, id, message})

        else{
            console.log("credentials are Wrong ");
            let message = "Failed"
            res.status(200).send({message});
        }
    })
})


app.post('/addreview', function(req,res){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS');
    console.log(req.body);
    // var item = {
    //     _id: req.body.kdramas.id,
    //     title: req.body.kdramas.title,
    //     genre: req.body.kdramas.genre,
    //     description: req.body.kdramas.description,
    //     image: req.body.kdramas.image
    // }
    // var kdramas = kdramaData(item);
    // kdramas.save();
  })

 
app.listen(3000, function(){
    console.log('listening to port 3000');
});





