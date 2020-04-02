import React from "react";
import * as Yup from "yup";

import {Field, Form, Formik, FormikProps} from 'formik';

import Button from '../Button';
import Fade from 'react-reveal/Fade';
import {FormulaireWrapper} from './FormDevis.style';

const DevisSchema = Yup.object().shape({
    nom: Yup.string()
    .min(1,'Veuillez renseigner votre nom et prénom')
    .required('Ce champ est obligatoire'),
    email: Yup.string()
    .email()
    .required('Ce champ est obligatoire'),
    tel:Yup.string()
    .matches(/^\d{10}$/, 'Veuillez entrer un numéro de téléphone valide')
    .required('Ce champ est obligatoire'),
    marque:Yup.string()
    .required('Ce champ est obligatoire'),
    modele:Yup.string()
    .min(2,'Veuillez entrer un mot complet'),
    energie:Yup.number()
    .min(1, 'Veuillez entrer un chiffre plus grand'),

    dateMiseEnCirculation:Yup.string(),
    
    budget:Yup.number()
    .min(1, 'Veuillez entrer un chiffre plus grand'),

    boiteVitesse:Yup.string()
    .required('Veuillez choisir le type de boîte de vitesse')
});



export const FormDevis = (props) => (
  <FormulaireWrapper onClick={props.click} className={ props.hidden ? 'hidden' : null}>
    <Formik
      initialValues={{
        nom: '',
        email: '',
        tel:'',
        marque:'',
        modele:'',
        energie:'',
        dateMiseEnCirculation:'',
        budget:'',
        boiteVitesse:'',
      }}
      validationSchema={DevisSchema}
      onSubmit={values => {
        fetch('/api/devis', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }).then((res) => {
          const formContainer = document.querySelector('#' + props.id + ' .formContainer');
          const form = document.querySelector('#' + props.id);
          const btn = document.querySelector('button');
          let markup;
          btn.setAttribute('disabled', 'disabled');
          if(res.status === 200){
            markup = `
            <div>
              <h2>Votre message à bien été envoyé !</h2>
              <p>Nous mettons tout en oeuvre pour vous répondre dans les plus brefs délais.</p>
            </div>
            `} else {
              markup = `
              <div>
                <h2>Une erreur est survenue</h2>
                <p>Nous vous invitons à essayer ultérieurement.</p>
              </div>`
            }
          form.reset();
          formContainer.innerHTML = ' ';
          form.removeChild(form.childNodes[2]);
          formContainer.insertAdjacentHTML('afterbegin', markup);
      }, (error) => {
          console.log(error.text);
      });
      }}
    >
      {({ errors, touched }) => (
      <Fade left duration={500}>
        <Form id={props.id}>
        <span className="closeFormBtn">✖</span>
          <div className="formContainer">
            <div className="formGroup">
            <label htmlFor="nom">Nom et prénom*</label>
            <Field type="text" name="nom" id="nom"/>
            {errors.nom && touched.nom ? (
              <div className="errors">{errors.nom}</div>
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
            <label htmlFor="marque">Marque du véhicule*</label>
            <Field type="text" name="marque" id="marque" />
            {errors.marque && touched.marque ? (
              <div className="errors">{errors.marque}</div>
            ) : null}
            </div>
            
            <div className="formGroup">
            <label htmlFor="modele">Modèle du véhicule</label>
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
            <label htmlFor="dateMiseEnCirculation">Date de mise en circulation</label>
            <Field type="text" name="dateMiseEnCirculation" id="dateMiseEnCirculation" />
            {errors.dateMiseEnCirculation && touched.dateMiseEnCirculation ? (
              <div className="errors">{errors.dateMiseEnCirculation}</div>
            ) : null}
            </div>

            <div className="formGroup"> 
            <label htmlFor="budget">Budget</label>
            <Field type="text" name="budget" id="budget" />
            {errors.budget && touched.budget ? (
              <div className="errors">{errors.budget}</div>
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
          </div>
          <Button type="submit" title="Envoyer"/>
        </Form>
        </Fade>
      )}
    </Formik>
  </FormulaireWrapper>
);
