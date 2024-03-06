var express = require('express');
var router = express.Router();
const { createTransport } = require('nodemailer');

const transporter = createTransport({
  host: "mail.reyma.com.mx",
  port: 465,
  auth: {
      user: "atencion.cliente@plazarella.com.mx",
      pass: "IiGR1nYql4#R",
  },
  secure: true,
  tls: {
    rejectUnauthorized: false,
  },
});

router.post('/send-email', function (req, res, next) {
  if (!req.body){
    res.send({success: false, error: 'No data in body'})
    return ;
  }
  if (!req.body.name || !req.body.phone, !req.body.email, !req.body.subject, !req.body.message){
    res.send({success: false, error: 'Missing Data in Body'});
    return ;
  }
  const mailOptions = {
    from: 'atencion.cliente@plazarella.com.mx',
    to: 'ml.varama12@gmail.com',
    subject: `${req.body.subject}`,
    text: `
      Nombre: ${req.body.name},\n
      Teléfono: ${req.body.phone},\n
      Email: ${req.body.email},\n
      Asunto: ${req.body.subject},\n
      Mensaje: ${req.body.message},\n
    `,
  };
  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
          res.send({succes: false, error: error});
          return ;
      } else {
          res.send({succes: true, message: 'Email sent: ' + info.response})
      }
  });
});

module.exports = router;
