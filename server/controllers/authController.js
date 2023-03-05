const OtpAuth = require('../models/otpAuth');
const User = require('../models/user');
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "some super secret key here...";

const { sendSMS } = require("./smsController");

const signIn = async (req, res)=>{
    const Email = req.body.email;

    User.find({email: Email}, async function (err, docs) {
        if (docs.length !== 0) {

            // generate otp for new user
            const OTP = otpGenerator.generate(6, {
                digits: true,
                upperCaseAlphabets: false,
                specialChars: false,
                lowerCaseAlphabets: false,
            });
        
            const otp = {
                email: Email,
                otp: OTP,
            };

            console.log("Generated otp for signin: ", otp);
            //encrypting the otp and then saving to Otp_table
            sendSMS(Email, otp.otp);


            const salt = await bcrypt.genSalt(10);
            otp.otp = await bcrypt.hash(otp.otp, salt);
        
            const newUserLogin = new OtpAuth ({
                email: otp.email,
                otp: otp.otp
            });

            newUserLogin.save((error, success) => {
                if(error) console.log(error);
                else console.log("Saved::otp-temporarily::ready for validation");
            })
        
            return res.status(200).send({msg: "Otp sent successfully!"});
        }
        else {
            return res.status(400).send({msg: "User not registered."});
        }
    })
}


const signUp = async (req, res)=>{
    const Email = req.body.email;

    //validating whether user already exists or not
    User.find({email: Email}, async function (err, docs) {
        if (docs.length !== 0) {
            return res.status(400).send({msg: "user already registered"});
        }
        else {
            // generate otp for new user
            const OTP = otpGenerator.generate(6, {
                digits: true,
                upperCaseAlphabets: false,
                specialChars: false,
                lowerCaseAlphabets: false,
            });
        
            const otp = {
                email: Email,
                otp: OTP,
            };
            console.log("Before hashing: ", otp);
            
            sendSMS(Email, otp.otp);
            
            //encrypting the otp and then saving to Otp_table
            const salt = await bcrypt.genSalt(10);
            otp.otp = await bcrypt.hash(otp.otp, salt);
        
            const newUserLogin = new OtpAuth ({
                email: otp.email,
                otp: otp.otp
            });
        
            newUserLogin.save((error, success) => {
                if(error) console.log(error);
                else console.log("Saved::otp::ready for validation");
            })
        
            return res.status(200).send({msg: "Otp sent successfully"});
        }
    })
}

const verifyLogin = async (req, res) => {
    const Email = req.body.email;
    const inputOtp = req.body.otp;

    OtpAuth.find({email: Email}, async function (err, docs) {
        if(docs.length === 0) {
            return res.status(400).send( {msg: "You used an expired OTP"});
        }
        else {
            const generatedOtp = docs[0].otp;
            
            const validUser = await bcrypt.compare(inputOtp, generatedOtp);

            if(Email === docs[0].email && validUser) {
                User.find({email: Email}, async function (err, user) {
                    res.cookie("user_token", user[0].user_token, {
                        expires: new Date(Date.now() + 172800000), //expire in 2 days
                        httpOnly: true
                    }).send({msg: `Success signin`, cookie: `updated`})
                })
            }
            else {
                return res.status(406).send({msg: `wrong otp`});
            }
        }
    })
}



const verifyOtp = async (req, res) => {
    const Email = req.body.email;
    const inputOtp = req.body.otp;

    OtpAuth.find({email: Email}, async function (err, docs) {
        if(docs.length === 0) {
            return res.status(400).send("You used an expired OTP!");
        }
        else {
            const generatedOtp = docs[0].otp;
            
            const validUser = await bcrypt.compare(inputOtp, generatedOtp);

            if(Email === docs[0].email && validUser) {
                const secret = JWT_SECRET;
                const payload = {
                  email: req.body.email,
                };
                const token = jwt.sign(payload, secret);

                //saving new user
                const newUser = new User ({
                    user_token: token,
                    email: Email
                });
            
                newUser.save((error, success) => {
                    if(error) console.log(error);
                    else console.log("Signup successful: ", newUser);
                })

                res.cookie("user_token", token, {
                    expires: new Date(Date.now() + 172800000), //expire in 2 days
                    httpOnly: true
                })

                return res.status(200).send({msg: "New User Added"});
            }
            else {
                return res.status(400).send({msg: "Failed"})
            }
        }
    }) 
}



const UserProfile = (req, res) => {
    const { userId } = req.params;
    if (userId) {
        User.findById({ _id: userId })
            .exec((error, _user) => {
                if (error) return res.status(404).json({ msg: `Something went wrong`, error });
                if (_user) {
                    const { _id, fullName, firstName, lastName, profilePicture, email, role, username, contactNumber, createdAt } = _user;
                    return res.status(200).json({
                        user: { _id, fullName, firstName, lastName, profilePicture, email, role, username, contactNumber, createdAt }
                    });
                }
            })
    } else {
        return res.status(404).json({ msg: `User dosen't exits` });
    }
}

module.exports = {
    signUp,
    verifyOtp,
    UserProfile,
    signIn,
    verifyLogin
}