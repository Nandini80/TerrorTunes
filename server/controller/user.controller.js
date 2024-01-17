const userschema = require("../modal/user.schema");
const userColRef = userschema();
const webtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function signup(req, resp) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.pass, 10);
        const obj = new userColRef({
            email: req.body.email,
            pass: hashedPassword,
        });
        await obj.save();
        resp.send("Signed up successfully");
    } catch (err) {
        resp.status(500).json({ status: false, message: "Error during signup", error: err });
    }
}

async function login(req, resp) {
    try {
        const user = await userColRef.findOne({ email: req.body.email });
        if (!user || !(await bcrypt.compare(req.body.pass, user.pass))) {
            resp.status(401).json({ status: false, message: "Invalid email or password" });
            return;
        }

        const token = webtoken.sign({ email: user.email, desig: user.desig }, process.env.SECRET_KEY, { expiresIn: '1h' });
        resp.json({ status: true, user, token, message: "Valid User" });
    } catch (error) {
        resp.status(500).json({ status: false, message: "An error occurred during login", error });
    }
}

async function CurrentUser(req, resp) {
    try {
        const user = await userColRef.findOne({ email: req.email });
        if (!user) {
            resp.status(404).json({ status: false, message: "User not found" });
            return;
        }
        resp.json({ status: true, message: "OK user id", user });
    } catch (error) {
        resp.status(500).json({ status: false, message: "An error occurred while fetching the current user", error });
    }
}

module.exports = { signup, login, CurrentUser };
