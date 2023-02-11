const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");
app.use(cors());
const travel = require("./models/travel");
mongoose
  .connect(
    "mongodb+srv://91816464:91246464@cluster0.mxaj49s.mongodb.net/infos",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("mongoose connected");
  })
  .catch(() => {
    console.log("mongoose not connected");
  });
app.get("/test" , async (req, res)=>{
    try{
        const data = await travel.find();
        res.status(200).send({data : data});
    }catch(err){
        res.status(500).send({data : err});
    }
   
  
});
app.get("/info/comments" , async (req, res)=>{
    console.log("object");
    const data = 
    res.status(200).send({test: "test1"});
});

app.listen(5500 , ()=> {
    console.log("3000 port deer server aslaa");
});