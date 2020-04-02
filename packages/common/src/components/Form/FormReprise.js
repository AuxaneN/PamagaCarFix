import React from "react";
import Link from 'next/link';
import * as Yup from "yup";

import {Field, Form, Formik, FormikProps} from 'formik';

import Button from '../Button';
import Fade from 'react-reveal/Fade';
import {FormulaireWrapper} from './FormReprise.style';

import Box from '../Box';
import Container from '../UI/Container';
import Heading from '../Heading';

const RepriseSchema = Yup.object().shape({
    civilite:Yup.string()
    .required('Veuillez choisir une option'),
    nom: Yup.string()
    .min(1,'Veuillez renseigner votre nom')
    .required('Ce champ est obligatoire'),
    prenom: Yup.string()
    .min(1,'Veuillez renseigner votre nom')
    .required('Ce champ est obligatoire'),
    email: Yup.string()
    .email()
    .required('Ce champ est obligatoire'),
    tel:Yup.string()
    .matches(/^\d{10}$/, 'Veuillez entrer un numéro de téléphone valide')
    .required('Ce champ est obligatoire'),
    codePostal:Yup.number()
    .min(6,'Veuillez entrer un code postal valide')
    .required('Ce champ est obligatoire'),
    marque:Yup.string()
    .required('Ce champ est obligatoire'),
    modele:Yup.string()
    .min(2,'Veuillez entrer un mot complet')
    .required('Ce champ est obligatoire'),
    energie:Yup.number()
    .min(1, 'Veuillez entrer un chiffre plus grand'),
    annee:Yup.number()
    .min(4, 'Veuillez entrer une année au format AAAA'),
    mois:Yup.number()
    .min(2, 'Veuillez entrer un mois au format MM'),
    kilometrage:Yup.number(),
    nombrePortes:Yup.number(),
    boiteVitesse:Yup.string()
    .required('Veuillez choisir le type de boîte de vitesse'),
    remarques:Yup.string(),
    defauts:Yup.string()
});



export const FormReprise = (props) => (
  <FormulaireWrapper id="reprise">
    <Container>
      <Box>
        <Heading content="Formulaire de demande de reprise"/>
      </Box>            
    </Container>
    <Formik
      initialValues={{
        civilite:'',
        nom: '',
        prenom: '',
        email: '',
        tel:'',
        codePostal:'',
        marque:'',
        modele:'',
        energie:'',
        annee:'',
        mois:'',
        kilometrage:'',
        nombrePortes:'',
        boiteVitesse:'',
        remarques:'',
        defauts:'',
      }}
      validationSchema={RepriseSchema}
      onSubmit={values => {
        fetch('/api/reprise', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }).then((res) => {
          res.status === 200 ? console.log('submitted: true ') : console.log(res.status);
          const formContainer = document.querySelector('#reprise1 .formContainer');
          const form = document.querySelector('#reprise1');
          const btn = document.querySelector('button');
          btn.classList.add('disabled');
          const markup = `
          <div>
            <h2>Le formulaire à bien été envoyé!</h2>
            <p>Nous mettons tout en oeuvre pour vous répondre dans les plus brefs délais.</p>
          </div>
          `
          const button = `
          <a href="/nos-offres">
            <button type="button"/>
               Retour
            </button>
          </a>
          `
          form.reset();
          formContainer.innerHTML = ' ';
          form.innerHTML = ' ';
          form.insertAdjacentHTML('afterbegin', markup);
          form.insertAdjacentHTML('beforeend', button);

  
      }, (error) => {
          console.log(error.text);
      });
      }}
    >
      {({ errors, touched }) => (
      <Fade left duration={500}>
        <Form  id="reprise1">
          <div className="formContainer">
          <div className="formGroup radio"> 
              <label >Civilité*</label>
              <label htmlFor="Mr">Mr</label>
              <Field name="civilite" id="Mr" value="Mr" type="radio"/>
              <label htmlFor="Mme">Mme</label>
              <Field name="civilite" id="Mme" value="Mme" type="radio"/>
              {errors.civilite && touched.civilite ? (
                <div className="errors">{errors.civilite}</div>
              ) : null}
            </div>

            <div className="formGroup">
            <label htmlFor="nom">Nom*</label>
            <Field type="text" name="nom" id="nom"/>
            {errors.nom && touched.nom ? (
              <div className="errors">{errors.nom}</div>
            ) : null}
            </div>

            <div className="formGroup">
            <label htmlFor="prenom">Prénom*</label>
            <Field type="text" name="prenom" id="prenom"/>
            {errors.prenom && touched.prenom ? (
              <div className="errors">{errors.prenom}</div>
            ) : null}
            </div>

            <div className="formGroup">
              <label htmlFor="email">E-mail*</label>
              <Field type="text" name="email" id="email" type="email" />
              {errors.email && touched.email ? <div className="errors">{errors.email}</div> : null}
            </div>

            <div className="formGroup">
            <label htmlFor="tel">Téléphone*</label>
            <Field type="text" name="tel" id="tel"/>
            {errors.tel && touched.tel ? (
              <div className="errors">{errors.tel}</div>
            ) : null}
            </div>

            <div className="formGroup">
            <label htmlFor="codePostal">Code Postal*</label>
            <Field type="text" name="codePostal" id="codePostal"/>
            {errors.codePostal && touched.codePostal ? (
              <div className="errors">{errors.codePostal}</div>
            ) : null}
            </div>

            <div className="formGroup">
            <label htmlFor="marque">Marque du véhicule*</label>
            <Field type="text" name="marque" id="marque" />
            {errors.marque && touched.marque ? (
              <div className="errors">{errors.marque}</div>
            ) : null}
            </div>
            
            <div className="formGroup">
            <label htmlFor="modele">Modèle du véhicule*</label>
            <Field type="text" name="modele" id="modele"/>
            {errors.modele && touched.modele ? (
              <div className="errors">{errors.modele}</div>
            ) : null}
            </div>

            <div className="formGroup"> 
            <label htmlFor="energie">&Eacute;nergie</label>
            <Field type="text" name="energie" id="energie" />
            {errors.energie && touched.energie ? (
              <div className="errors">{errors.energie}</div>
            ) : null}
            </div>

            <div className="formGroup"> 
            <label htmlFor="annee">Année</label>
            <Field type="text" name="annee" id="annee" />
            {errors.annee && touched.annee ? (
              <div className="errors">{errors.annee}</div>
            ) : null}
            </div>

            <div className="formGroup"> 
            <label htmlFor="mois">Mois</label>
            <Field type="text" name="mois" id="mois" />
            {errors.mois && touched.mois ? (
              <div className="errors">{errors.mois}</div>
            ) : null}
            </div>

            <div className="formGroup"> 
            <label htmlFor="kilometrage">Kilométrage</label>
            <Field type="text" name="kilometrage" id="kilometrage" />
            {errors.kilometrage && touched.kilometrage ? (
              <div className="errors">{errors.kilometrage}</div>
            ) : null}
            </div>

            <div className="formGroup"> 
            <label htmlFor="nombrePortes">Nombre de portes</label>
            <Field type="text" name="nombrePortes" id="nombrePortes" />
            {errors.nombrePortes && touched.nombrePortes ? (
              <div className="errors">{errors.nombrePortes}</div>
            ) : null}
            </div>

            <div className="formGroup radio"> 
              <label >Boîte de vitesse*</label>
              <label htmlFor="manuelle">Manuelle</label>
              <Field name="boiteVitesse" id="manuelle" value="manuelle" type="radio"/>
              <label htmlFor="automatique">Automatique</label>
              <Field name="boiteVitesse" id="automatique" value="automatique" type="radio"/>
              {errors.boiteVitesse && touched.boiteVitesse ? (
                <div className="errors">{errors.boiteVitesse}</div>
              ) : null}
            </div>

            <div className="formGroup">
              <label htmlFor="remarques">Remarques*</label>
              <Field as="textarea" name="remarques" id="remarques" cols="50"/>
              {errors.remarques && touched.remarques ? (
                <div className="errors">{errors.remarques}</div>
              ) : null}
            </div>

            <div className="formGroup">
              <label htmlFor="defauts">Défauts du véhicules</label>
              <Field as="textarea" name="defauts" id="defauts" cols="50"/>
              {errors.defauts && touched.defauts ? (
                <div className="errors">{errors.defauts}</div>
              ) : null}
            </div>


          </div>
          <Button type="submit" title="Envoyer"/>
        </Form>
        </Fade>
      )}
    </Formik>
  </FormulaireWrapper>
);
