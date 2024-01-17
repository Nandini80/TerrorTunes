var PersonSchema = require("../modal/person.schema");
var personColRef = PersonSchema();
var path = require("path");

async function SaveInfo(req, resp) {
    var obj = new personColRef(req.body);
    console.log(req.body);

    await obj.save().then((doc) => {
        resp.send("Saved Successfullyyy!!");
    }).catch((err) => {
        resp.send(err);
    });
}

async function updateinfo(req, resp) {
    const { email, name, contact, musicstyle, experience } = req.body;
    const data = { name, mobile: contact, musicstyle, experience }; // Corrected the reference to contact
    await personColRef.updateOne({ email }, { $set: data }).then((result) => {
        resp.send("Data updated");
    }).catch((err) => {
        resp.send(err);
    });
}

async function fetchinfo(req, resp) {
    console.log(req.query);
    await personColRef.findOne({ email: req.query.email }).then((doc) => {
        resp.send(doc);
    }).catch((err) => {
        resp.send(err.message);
    });
}

async function specialization(req, resp) {
    try {
        const user = await personColRef.distinct("musicstyle");
        resp.json({ user, status: true });
        return;
    } catch (err) {
        resp.status(500).json({ message: "Something went wrong", status: false });
        console.log(err);
    }
}

async function fetchPerson(req, resp) {
    console.log(req.body);
    await personColRef.find({ musicstyle: req.query.c1 }).then((res) => { // Changed from req.body.c1 to req.query.c1
        resp.send(res);
    }).catch((e) => {
        console.log(e);
    });
}

module.exports = { SaveInfo, updateinfo, fetchinfo, specialization, fetchPerson };
