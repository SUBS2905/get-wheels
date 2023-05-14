const {
  contactNotification,
  sendDealNotification,
} = require("./smsController");

const contactNotify = async (req, res) => {
  const Email = req.body.email;
  const Name = req.body.name;
  const Sub = req.body.sub;
  contactNotification(Email, Name, Sub);
};

const dealNotify = async (req, res) => {
  const Email = req.body.email;
  const Name = req.body.name;
  const CustomerEmail = req.body.customerEmail;
  sendDealNotification(Email, Name, CustomerEmail);
};

module.exports = {
  contactNotify,
  dealNotify,
};
