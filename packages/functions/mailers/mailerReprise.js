"use strict";

const nodemailer = require('nodemailer');

const Email = require('email-templates');

require('dotenv').config();

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
  civilite,
  nom,
  prenom,
  email,
  tel,
  codePostal,
  marque,
  modele,
  energie,
  annee,
  mois,
  kilometrage,
  nombrePortes,
  boiteVitesse,
  remarques,
  defauts
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
    template: 'reprise',
    message: {
      to: process.env.RECEIVER_EMAIL
    },
    locals: {
      civilite,
      nom,
      prenom,
      email,
      tel,
      codePostal,
      marque,
      modele,
      energie,
      annee,
      mois,
      kilometrage,
      nombrePortes,
      boiteVitesse,
      remarques,
      defauts
    }
  }).then(res => {
    console.log('res.originalMessage', res.originalMessage);
  }).catch(error => console.log('Erreur dans mailerContaReprise', error));
};

module.exports = send;