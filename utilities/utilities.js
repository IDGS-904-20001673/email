const { createTransport } = require('nodemailer');
// const transporter = createTransport({
//   host: "mail.reyma.com.mx",
//   port: 465,
//   auth: {
//       user: "atencion.cliente@plazarella.com.mx",
//       pass: "IiGR1nYql4#R",
//   },
//   secure: true,
//   tls: {
//     rejectUnauthorized: false,
//   },
// });


// router.post('/send-email', function (req, res, next) {
//   if (!req.body){
//     res.send({success: false, error: 'No data in body'})
//     return ;
//   }
//   if (!req.body.name || !req.body.phone, !req.body.email, !req.body.subject, !req.body.message){
//     res.send({success: false, error: 'Missing Data in Body'});
//     return ;
//   }
//   const mailOptions = {
//     from: 'atencion.cliente@plazarella.com.mx',
//     to: 'ml.varama12@gmail.com',
//     subject: `${req.body.subject}`,
//     text: `
//       Nombre: ${req.body.name},\n
//       Teléfono: ${req.body.phone},\n
//       Email: ${req.body.email},\n
//       Asunto: ${req.body.subject},\n
//       Mensaje: ${req.body.message},\n
//     `,
//   };

//   transporter.sendMail(mailOptions, function(error, info){
//       if (error) {
//           res.send({succes: false, error: error});
//           return ;
//       } else {
//           res.send({succes: true, message: 'Email sent: ' + info.response})
//       }
//   });
// });


function configuracionGenerica(user, pass) {
    return createTransport({
        host: "mail.reyma.com.mx",
        port: 465,
        auth: {
            user: user,
            pass: pass,
        },
        secure: true,
        tls: {
            rejectUnauthorized: false,
        },
    });
}


function sendEmail(req, res, next, transporter, fromVar) {
    if (!req.body) {
        res.send({ success: false, error: 'No data in body' });
        return;
    }
    if (!req.body.name || !req.body.phone || !req.body.email || !req.body.subject || !req.body.message) {
        res.send({ success: false, error: 'Missing Data in Body' });
        return;
    }
    const mailOptions = {
        from: fromVar,
        to: 'diseno.web@reyma.com.mx, atavares@reyma.com.mx',
        subject: `${req.body.subject}`,
        text: `
            Nombre: ${req.body.name},\n
            Teléfono: ${req.body.phone},\n
            Email: ${req.body.email},\n
            Asunto: ${req.body.subject},\n
            Mensaje: ${req.body.message},\n
        `,
    };

    if (fromVar.includes('plazarella')) {
        mailOptions.to += ', investigacion.mkt@reyma.com.mx'
    } else if (fromVar.includes('tiretop')) {
        mailOptions.to += ', ventas02@tiretop.com.mx'
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.send({ success: false, error: error });
            return;
        } else {
            res.send({ success: true, message: 'Email sent: ' + info.response })
        }
    });
}



function sendEmailContact(req, res, next, transporter, fromVar) {
    if (!req.body) {
        res.send({ success: false, error: 'No data in body' });
        return;
    }
    if (!req.body.contact) {
        res.send({ success: false, error: 'Missing Data in Bodys' });
        return;
    }

    const htmlBody = `

  
    <div style="text-align: center;">
        <h2 style="margin-bottom: 50px; color: black;">Gracias por ser partícipe de este gran evento. ¡Te esperamos el
            28 de abril a partir de las 10 am en las
            instalaciones de Plazarella!</h2>
            <a style="font-size: 20px; color: #ffffff; background-color: #f18425; text-decoration: none; padding: 30px;" href="https://plazarella.com" target="_blank">Visita plazarella.com</a>
        <br>
        <img style="margin-top: 50px;"
            src="https://plazarella.com/assets/dia-del-nino/PlazarellaFestDiadelNino28deAbril.png" alt="Plazarella">
    </div>
`;

    const mailOptions = {
        from: fromVar,
        to: `${req.body.contact}`,
        subject: 'Gracias por ser parte de Kids Plazarella Fest 2024',
        html: htmlBody,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.send({ success: false, error: error });
            return;
        } else {
            res.send({ success: true, message: 'Email sent: ' + info.response })
        }
    });
}



module.exports = {
    configuracionGenerica,
    sendEmail,
    sendEmailContact
};