const nodemailer=require("nodemailer")

var transport1 = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6f1e4a4a3e474a",
    pass: "452e1b00ef7ce1"
  }
});

  module.exports=transport1

  