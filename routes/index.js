var express = require('express');
var router = express.Router();
const {
  configuracionGenerica,
  sendEmail
} = require('../utilities/utilities')



router.post('/plazarella', function (req, res, next) {
  const transporter = configuracionGenerica("atencion.cliente@plazarella.com.mx", "IiGR1nYql4#R");
  let fromVar = "atencion.cliente@plazarella.com.mx";
  sendEmail(req, res, next, transporter,fromVar);
});


router.post('/tiretop', function (req, res, next) {
  const transporter = configuracionGenerica("atencion.cliente@tiretop.com.mx", "IiGR1nYql4#R");
  let fromVar = "atencion.cliente@tiretop.com.mx";
  sendEmail(req, res, next, transporter,fromVar);
});


router.post('/newsroom', function (req, res, next) {
  const transporter = configuracionGenerica("atencion.cliente@reyma.com.mx", "IiGR1nYql4#R");
  let fromVar = "atencion.cliente@reyma.com.mx";
  sendEmail(req, res, next, transporter,fromVar);
});


router.post('/reyma', function (req, res, next) {
  const transporter = configuracionGenerica("atencion.cliente@reyma.com.mx", "IiGR1nYql4#R");
  let fromVar = "atencion.cliente@reyma.com.mx";
  sendEmail(req, res, next, transporter,fromVar);
});




module.exports = router;
