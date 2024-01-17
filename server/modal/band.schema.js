var mongoose = require("mongoose");

function GetBandschema() {
    var SchemaClass = mongoose.Schema;
    var colSchema = new SchemaClass({
        email: { type: String, required: true, unique: true, index: true },
        bandname: { type: String },
        contact: { type: String },
        musicstyle: { type: String },
        experience: { type: Number },
        members : {type : Number},
    }, {
        versionKey: false
    });

    var bandColRef = mongoose.model("bandschema", colSchema);
    return bandColRef;
}

module.exports = GetBandschema;
