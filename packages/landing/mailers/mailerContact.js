const nodemailer = require('nodemailer')
const Email = require('email-templates');


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASS 
  },
  tls: {
    rejectUnauthorized: false
  }
});

const send = ({ email, nom, text, tel}) => {

  // verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server mail connecté");
  }
});


  const emailTemplate = new Email({
    message: {
      from: email
    },
    // uncomment below to send emails in development/test env:
    send: true,
    transport : transporter
  });
  

    return emailTemplate
      .send({
        template: 'contact',
        message: {
          to: process.env.RECEIVER_EMAIL
        },
        locals: {
          email,
          nom,
          text,
          tel
        }
      })
      .then(res => {
        console.log('res.originalMessage', res.originalMessage)
      }) .catch(error => console.log('Erreur dans mailerContact',error));

}

module.exports = send