const functions = require('firebase-functions');
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const mailerContact = require('./mailers/mailerContact');
const mailerDevis = require('./mailers/mailerDevis');
const mailerReprise = require('./mailers/mailerReprise');

var request = require('request');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(
  '/public',
  express.static(__dirname + '/public', {
    maxAge: '365d'
  })
);
  app.post('/api/contact', (req, res) => {
    const { email = '', nom = '', message = '', tel = '' } = req.body
    mailerContact({ email, nom, text: message, tel}).then(response => {
      res.send(response)
    }).catch((error) => {
      res.send('failed')
    })
  })
  app.post('/api/devis', (req, res) => {
    const {nom= '',
    email= '',
    tel='',
    marque='',
    modele='',
    energie='',
    dateMiseEnCirculation='',
    budget='',
    boiteVitesse='',} = req.body
    mailerDevis({ 
        nom,
        email,
        tel,
        marque,
        modele,
        energie,
        dateMiseEnCirculation,
        budget,
        boiteVitesse,
    }).then(response => {
      res.send(response)
    }).catch((error) => {
      res.send('failed')
    })
  })
  app.post('/api/reprise', (req, res) => {
    const {
    civilite='',
    nom='',
    prenom='',
    email='',
    tel='',
    codePostal='',
    marque='',
    modele='',
    energie='',
    annee='',
    mois='',
    kilometrage='',
    nombrePortes='',
    boiteVitesse='',
    remarques='',
    defauts=''
    } = req.body
    mailerReprise({ 
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
    }).then(response => {
      res.send(response)
    }).catch((error) => {
      res.send('failed')
    })
  })

app.get('*', async (req, res) => {
  const nextApp = next({
    conf: {
      distDir: 'next',
      publicRuntimeConfig: {
        staticFolder: '/public/',
      },
    },
  });
  await nextApp.prepare();
  const handle = nextApp.getRequestHandler();
  return handle(req, res);
});

exports.next = functions.https.onRequest(app);
