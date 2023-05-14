const {
  contactNotification,
  sendDealNotification,
} = require("./smsController");

const contactNotify = async (req, res) => {
  const Email = req.body.email;
  const Name = req.body.name;
  const Sub = req.body.sub;
  contactNotification(Email, Name, Sub);
  return res.status(200).json({success: true});
};

const dealNotify = async (req, res) => {
  const Email = req.body.email;
  const Name = req.body.name;
  const CustomerEmail = req.body.customerEmail;
  sendDealNotification(Email, Name, CustomerEmail);
  return res.status(200).json({success: true});
};

module.exports = {
  contactNotify,
  dealNotify,
};
