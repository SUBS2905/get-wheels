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
    subject: "One Time Password - getWheels✨",
    html: `Do not share your secret otp with anyone. Otp will be valid for 5 mins only. <br><strong>OTP: ${otp}</strong><br><br>Thankyou for choosing getWheels!<br>`,
  };

  transporter.sendMail(mailOptions, function (err, success) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
}

function sendDealNotification(Email, Name, customerEmail) {
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
    subject: "Someone is interested in your Vehicle",
    html: `
    If you've received a message or a call from someone expressing interest in your vehicle, <strong>congratulations!</strong> This is a positive sign that you may be able to rent your vehicle quickly and easily.<br><br>Contactor Information: <br>Name: ${Name} <br> Email: ${customerEmail}<br>`,
  };

  transporter.sendMail(mailOptions, function (err, success) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
}

function contactNotification(Email, Name, Sub) {
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
    subject: "Our team will reach out to you soon!",
    html: `
    Thankyou! ${Name} for contacting us, we have received your query <strong>"${Sub}"</strong>.<br><br>Team getWheels will reply you as soon as possible.`
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
  sendDealNotification,
  contactNotification
};
