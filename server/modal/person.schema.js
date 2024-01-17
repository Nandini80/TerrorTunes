var mongoose = require("mongoose");

function GetPersonschema() {
    var SchemaClass = mongoose.Schema;
    var colSchema = new SchemaClass({
        email: { type: String, required: true, unique: true, index: true },
        name: { type: String },
        contact: { type: String },
        musicstyle: { type: String },
        experience: { type: Number },
    }, {
        versionKey: false
    });

    var personColRef = mongoose.model("personschema", colSchema);
    return personColRef;
}

module.exports = GetPersonschema;
