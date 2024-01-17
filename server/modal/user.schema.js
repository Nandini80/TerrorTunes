var mongoose = require("mongoose");
const bcrypt = require("bcrypt");

function GetReactUserschema() {
    var SchemaClass = mongoose.Schema;
    var colSchema = new SchemaClass({
        email: { type: String, required: true, unique: true, index: true }, // For unique id
        pass: { type: String, required: true },
    }, {
        versionKey: false
    });

    // Hash the password before saving it to the database
    colSchema.pre("save", async function (next) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(this.pass, salt);
            this.pass = hashedPassword;
            next();
        } catch (error) {
            next(error);
        }
    });

    var userColRef = mongoose.model("userschema", colSchema);
    return userColRef;
}

module.exports = GetReactUserschema;
