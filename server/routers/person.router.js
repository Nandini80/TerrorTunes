var express = require("express");
var controller = require("../controller/person.controller");
var app = express.Router();
// var {jawth} = require("../middleware/auth");

// app.post("/SaveInfo", controller.SaveInfo);
// app.post("/doUpdate", controller.updateinfo);
// app.post("/doFetch", controller.fetchinfo);

// app.get("/specialization", controller.specialization);
// app.post("/fetchPerson", controller.fetchPerson);

app.post("/profile",controller.SaveProfile);
app.post("/doUpdate",controller.updateProfile);
app.post("/doFetch",controller.fetchProfile);

app.get("/distinct-style",controller.distStyle);
app.post("/fetchStyles",controller.fetchStyles);

module.exports = app;