const bcrypt = require('bcryptjs');
const { userservice } = require('../service');
const { createtoken } = require('../Middleware/auth');


// Register a new user
const register = async (req, res) => {
    try {
        let body = req.body;
        let { username, password } = req.body;

        let duplicate = await userservice.findByName(username);

        if (duplicate) {
            throw new Error("user already exist");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        let newbody = {
            ...body,
            password: hashedPassword
        }

        let result = await userservice.creatuser(newbody);

        if (!result) {
            throw new Error("something went wrong");
        }

        res.status(201).json({
            massage: "user register successfully",
            data: result,
        });
        console.log(result);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

let userget = async (req, res) => {
    try {
        let result = await userservice.getuser();
        res.status(200).json({
            message: "get all user success",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Login user

let userlogin = async (req, res) => {
    try {
        let { username, password } = req.body;
        let user = await userservice.findByName(username);
        console.log(user);

        if (!user) {
            throw new Error("user not found!");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        let token = createtoken({ user })
        res.cookie("token", token);
        res.status(200).json({
            message: "login successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = { register, userget, userlogin };
