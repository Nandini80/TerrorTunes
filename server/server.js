var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var userRouter = require("./routers/user.router");
var bandRouter = require("./routers/band.router");
var personRouter = require("./routers/person.router");
var bp = require("body-parser");

var app = express();
var env = require("dotenv");
// app.use("/uploads",express.static('uploads'));
// var fileupload = require("express-fileupload");
// app.use(fileupload());

env.config();

app.use(cors());
app.use(bp.urlencoded({extended:true}));
app.listen(2000,()=>{
    console.log("          SERVER STARTED            ");
});

var config = require("./config/dbConfig");
const dburl = config.dburl;

var dbCon = mongoose.connect(dburl).then(() => {
    console.log("***********Connected*************");
}).catch((err) => {
    console.log("****" + err.toString());
    process.exit();
});


app.use(express.json({extended:true}));

app.use("/user",userRouter);
app.use("/band",bandRouter);
app.use("/person",personRouter);