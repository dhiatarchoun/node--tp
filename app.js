const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

const voiture = require("./routes/voiture");
const users = require("./routes/auth");
const posts = require("./routes/post");

dotenv.config();
const app = express();
app.use(express.json())


//routes
app.use("/voiture", voiture);
app.use("/users",users);
app.use("/post", posts);

//connection to mongoDB 
mongoose.connect("mongodb://localhost:27017")
.then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.error("error connecting to mongodb : ", err.message);
})

//start server
app.listen(5050, ()=>{
    console.log("server listening on port 5050");
})