const nodemailer = require("nodemailer");

function sendSMS(Email, otp) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "the4musketeeers@gmail.com",
      pass: "jyestailmwokdibd",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: "the4musketeeers@gmail.com",
    to: Email,
    subject: "One Time Password - getWheels",
    html: `Do not share your secret otp with anyone. Otp will be valid for 5 mins only. <br><strong>OTP: ${otp}</strong><br><br>Thankyou for choosing us!<br>`,
  };

  transporter.sendMail(mailOptions, function (err, success) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
}

module.exports = {
  sendSMS,
};
