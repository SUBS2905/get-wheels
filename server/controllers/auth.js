const User = require('../models/user');
const jwt = require('jsonwebtoken');
const shortid = require('shortid');

require("dotenv").config();


const signup = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) return res.status(400).json({ msg: `Something went wrong`, error });
            if (user) return res.status(409).json({ msg: 'User already exits' });

            const { firstName, lastName, email, password, contactNumber } = req.body;
            const _user = new User({
                firstName, lastName, email, password, contactNumber,
                username: shortid.generate()
            })

            _user.save((error, data) => {
                if (error) return res.status(400).json({ msg: `Something went wrong`, error });
                if (data) return res.status(201).json({ msg: 'User Successfully register !!' });
            })
        })
}

const signin = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) return res.status(400).json({ msg: `Something went wrong`, error });
            if (user) {
                if (user.authenticate(req.body.password)) {
                    const token = jwt.sign(
                        { id: user._id, role: user.role },
                        process.env.jwt_secret,
                        { expiresIn: '2h' }
                    )
                    const { _id, firstName, lastName, profilePicture, email, role, fullName, username, contactNumber } = user;
                    res.cookie('token', token, { expiresIn: '2h' });
                    res.status(200).json({
                        token,
                        user: {
                            _id, firstName, lastName, profilePicture, email, role, fullName, username, contactNumber
                        }
                    })
                } else {
                    return res.status(400).json({ msg: `Invalid Password` })
                }
            }
            if (!user) {
                return res.status(404).json({ msg: `User dosen't not exits` })
            }
        })
}


const signout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ msg: `Sign-out Successfull!` });
}

module.exports = {
    signup,
    signin,
    signout
}