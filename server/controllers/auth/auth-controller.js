const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

//register
const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            userName,
            email,
            password: hashPassword,
        });
        await newUser.save();  // Corrected this line
        res.status(200).json({
            success: true,
            message: "Success registration"
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "error occurred",
        });
    }
};

//login

const login = async (req, res) => {
    const { userName, email, password } = req.body;

    try {

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "error occurred",
        });
    }
};

//logout

//auth middleware

module.exports = { registerUser };
