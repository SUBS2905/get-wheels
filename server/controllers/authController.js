const OtpAuth = require('../models/otpAuth');
const User = require('../models/user');
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "some super secret key here...";




const signUp = async (req, res)=>{
    const number = req.body.contactNumber;

    //validating whether user already exists or not
    User.find({contactNumber: number}, async function (err, docs) {
        if (docs.length !== 0) {
            return res.status(400).send("user already registered.");
        }
        else {
            // generate otp for new user
            const OTP = otpGenerator.generate(6, {
                digits: true,
                upperCaseAlphabets: false,
                specialChars: false,
                lowerCaseAlphabets: false,
            });
        
            console.log("Generated OTP: ", OTP);
            const otp = {
                number: number,
                otp: OTP,
            };
            console.log("Before encryption: ", otp);
          
            //encrypting the otp and then saving to Otp_table
            const salt = await bcrypt.genSalt(10);
            otp.otp = await bcrypt.hash(otp.otp, salt);
        
            console.log("After encryption: ", otp);
        
            const newUserLogin = new OtpAuth ({
                mobileNumber: otp.number,
                otp: otp.otp
            });
        
            newUserLogin.save((error, success) => {
                if(error) console.log(error);
                else console.log("Saved::otp::ready for validation");
            })
        
            return res.status(200).send("Otp sent successfully!");
        }
    })
}



const verifyOtp = async (req, res) => {
    const number = req.body.contactNumber;
    const inputOtp = req.body.otp;

    OtpAuth.find({mobileNumber: number}, async function (err, docs) {
        if(docs.length === 0) {
            return res.status(400).send("You used an expired OTP!");
        }
        else {
            console.log(docs[0].mobileNumber);
            console.log(docs[0].otp);
            const generatedOtp = docs[0].otp;
            
            const validUser = await bcrypt.compare(inputOtp, generatedOtp);

            if(number === docs[0].mobileNumber && validUser) {
                const secret = JWT_SECRET;
                const payload = {
                  number: req.body.number,
                };
                const token = jwt.sign(payload, secret);

                //saving new user
                const newUser = new User ({
                    user_token: token,
                    contactNumber: number
                });
            
                newUser.save((error, success) => {
                    if(error) console.log(error);
                    else console.log("Signup successful: ", newUser);
                })
            }
            return res.status(200).send("New User Added");
        }
    }) 
}

module.exports = {
    signUp,
    verifyOtp
}