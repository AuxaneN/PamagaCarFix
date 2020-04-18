const nodemailer = require('nodemailer')
require('dotenv').config();
const path = require('path');
const Email = require('email-templates');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASS 
  },
});

const send = ({
  nom,
  email,
  tel,
  marque,
  modele,
  energie,
  dateMiseEnCirculation,
  budget,
  boiteVitesse
}) => {
  const emailTemplate = new Email({
    message: {
      from: email
    },
    // uncomment below to send emails in development/test env:
    send: true,
    transport: transporter
  });
  return emailTemplate.send({
    template: 'devis',
    message: {
      to: process.env.RECEIVER_EMAIL
    },
    locals: {
      nom,
      email,
      tel,
      marque,
      modele,
      energie,
      dateMiseEnCirculation,
      budget,
      boiteVitesse
    }
  }).then(res => {
    console.log('res.originalMessage', res.originalMessage);
  }).catch(error => console.log('Erreur dans mailerDevis', error));
};

module.exports = send;