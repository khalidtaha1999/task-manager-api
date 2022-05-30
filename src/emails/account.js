const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS,
  },
});

const sendWelcomeEmail = (email, name) => {
  var mailOptions = {
    from: "khalidwtaha9490@gmail.com",
    to: email,
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const sendDeleteEmail = (email, name) => {
  var mailOptions = {
    from: "khalidwtaha9490@gmail.com",
    to: email,
    subject: "Good bye",
    text: `Good bye ${name} -_- , dont back again -_-`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = {
  sendWelcomeEmail,
  sendDeleteEmail,
};
