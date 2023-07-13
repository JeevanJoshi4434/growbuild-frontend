const route = require("express").Router();
const User = require('../Models/User');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { generateOTP } = require("../config/otpGenerator");
const http = require('http');
const cookieParser = require('cookie-parser');

route.post("/signup", async (req, res) => {
    const { name, email, password, phone } = req.body;
    const checkEmail = await User.findOne({ email: email });
    if (checkEmail) return res.status(200).json("Already Exists!");
    const secPass = bcrypt.hashSync(password, 10);
    const user = new User({ name, email, password: secPass, phone });

    try {
        const savedUser = await user.save();
        const accessToken = jwt.sign({
            id: user._id,
            name: user.name
        }, process.env.JWT_SECRET)
        const OTP = this.generateOTP();
        res.cookie('token', accessToken, {
            maxAge: 2592000, httpOnly: false
        })
        res.set('Set-Cookie', `token=${accessToken}; HttpOnly; Max-Age=2592000`);
        res.status(201).json({ message: "User Created Successfully!" });
    } catch (err) {
        res.status(500).json(err);
    }
})


// for login
route.post("/login", async (req, res,next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                const other = await User.findOne({ email }).select("-password");
                const accessToken = jwt.sign({
                    id: user._id,
                    name: user.name
                }, process.env.JWT_SECRET);
                res.cookie('token', accessToken, { httpOnly: true,maxAge:31536000 * 365 * 24 * 60 * 60 });
                res.status(200).json({ other});

            } else {
                res.status(400).json("Wrong Password");
            }
        } else {
            res.status(400).json("Wrong Email");
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

route.post('/reset/pass', async (req, res) => {
    const { phone, email, type } = req.body;
    if (type === 1) {
        const OTP = this.generateOTP();
        const user = await User.findOne({ phone });
    } else {
        const OTP = this.generateOTP();
        const user = await User.findOne({ email });
    }
})

route.post('/gen', async (req, res) => {
    const OTP = generateOTP();
    res.status(200).json(OTP);
})

route.get('/logout',async (req, res) => {
    // Set token to none and expire after 5 seconds
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 5 * 1000),
        httpOnly: true,
    })
    res
        .status(200)
        .json({ success: true, message: 'User logged out successfully' })
})

module.exports = route;
