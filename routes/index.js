var express = require('express');
var router = express.Router();
const { createTransport } = require('nodemailer');

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
      user: "reymacorreosweb@gmail.com",
      pass: "yrphzcjtipkqwdpj",
  },
});

const mailOptions = {
  from: 'reymacorreosweb@gmail.com',
  to: 'ml.varama12@gmail.com',
  subject: `Pruebas de SMTP`,
  text: `Hola`
};

router.post('/send-email', function (req, res, next) {
  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
          res.send(error);
      } else {
          res.send('Email sent: ' + info.response)
      }
  });
});

module.exports = router;
