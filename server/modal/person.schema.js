var mongoose = require("mongoose");

function GetPersonschema() {
    var SchemaClass = mongoose.Schema;
    var colSchema = new SchemaClass({
        email: { type: String, required: true, unique: true, index: true },
        name: { type: String },
        mobile: { type: String },
        musicstyle: { type: String },
        exp: { type: String },
        state:String,
        city:String,
        address:String,
        // pp:String,
        // idProof:String,
    }, {
        versionKey: false
    });

    var PersonColRef = mongoose.model("Person", colSchema);
    return PersonColRef;
}

module.exports = GetPersonschema;