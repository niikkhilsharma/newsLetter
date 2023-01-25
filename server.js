const nodeMailer = require("nodemailer");
let mailTransporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "niikkhilsharma@gmail.com",
    pass: "ydytimsuevelrpdb",
  },
});

let mailDetails = {
  from: "niikkhilsharma@gmail.com",
  to: "ns3887255@gmail.com, ns3887254@gmail.com",
  subject: "Sending mail",
  text: "Hi the day is good",
};

mailTransporter.sendMail(mailDetails, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent successfully");
  }
});
