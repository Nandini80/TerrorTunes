var mongoose = require("mongoose");

function Bandschema() {
    var SchemaClass = mongoose.Schema;
    var colSchema = new SchemaClass({
        email: { type: String, required: true, unique: true, index: true },
        name: { type: String },
        mobile: { type: String },
        musicstyle: { type: String },
        exp: { type: String },
        members : {type : String},
        state:String,
        city:String,
        address:String,
        // idProof:String,
        // cat:String,
    }, {
        versionKey: false
    });

    var BandColRef = mongoose.model("Band", colSchema);
    return BandColRef;
}

module.exports = Bandschema;