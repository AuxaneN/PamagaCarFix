const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const mailerContact = require('./mailers/mailerContact');
const mailerDevis = require('./mailers/mailerDevis');
const mailerReprise = require('./mailers/mailerReprise');

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.post('/api/contact', (req, res) => {
    const { email = '', nom = '', message = '', tel = '' } = req.body
    mailerContact({ email, nom, text: message, tel}).then(() => {
      console.log('success')
      res.send('success')
    }).catch((error) => {
      console.log('failed', error)
      res.send('failed')
    })
  })
  server.post('/api/devis', (req, res) => {
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
    }).then(() => {
      console.log('success')
      res.send('success')
    }).catch((error) => {
      console.log('failed', error)
      res.send('failed')
    })
  })
  server.post('/api/reprise', (req, res) => {
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
    }).then(() => {
      console.log('success')
      res.send('success')
    }).catch((error) => {
      console.log('failed', error)
      res.send('failed')
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })
  var server_port =  process.env.PORT || 80;
  var server_host = process.env.HOST || '0.0.0.0';
  server.listen(server_port, server_host, (err) => {
    if (err) throw err
    console.log(`> Read on http://localhost:${server_port}`)
  })
})