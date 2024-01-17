var BandSchema = require("../modal/band.schema");
var bandColRef = BandSchema();
var path = require("path");

async function SaveInfo(req, resp) {
    var obj = new bandColRef(req.body);
    console.log(req.body);

    await obj.save().then((doc) => {
        resp.send("Saved Successfullyyy!!");
    }).catch((err) => {
        resp.send(err);
    });
}

async function updateinfo(req, resp) {
    const { email, bandname, contact, musicstyle, experience,members } = req.body;
    const data = {bandname, contact, musicstyle, experience,members};
    await bandColRef.updateOne({ email }, { $set: data }).then((result) => {
        resp.send("Data updated");
    }).catch((err) => {
        resp.send(err);
    });
}

async function fetchinfo(req, resp) {
    console.log(req.query);
    await bandColRef.findOne({ email: req.query.email }).then((doc) => {
        resp.send(doc);
    }).catch((err) => {
        resp.send(err.message);
    });
}

async function specialization(req, resp) {
    try {
        const user = await bandColRef.distinct("musicstyle");
        resp.json({ user, status: true });
        return;
    } catch (err) {
        resp.status(500).json({ message: "Something went wrong", status: false });
        console.log(err);
    }
}

async function fetchBand(req, resp) {
    console.log(req.body);
    await bandColRef.find({ musicstyle: req.query.c1 }).then((res) => { 
        resp.send(res);
    }).catch((e) => {
        console.log(e);
    });
}

module.exports = { SaveInfo, updateinfo, fetchinfo, specialization, fetchBand };
