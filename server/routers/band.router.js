var express = require("express");
var controller = require("../controller/band.controller");
var app = express.Router();
// var {jawth} = require("../middleware/auth");

app.post("/profile",controller.SaveProfile);
app.post("/doUpdate",controller.updateProfile);
app.post("/doFetch",controller.fetchProfile);


app.get("/distinct-services",controller.distServices);
app.post("/fetchprovider",controller.fetchprovider);

module.exports = app;
