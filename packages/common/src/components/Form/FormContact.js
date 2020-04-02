import React from "react";
import * as Yup from "yup";

import Text from '../Text';
import Heading from '../Heading';

import {Field, Form, Formik} from 'formik';

import Button from '../Button';
import Fade from 'react-reveal/Fade';
import {FormulaireWrapper} from './FormContact.style';

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
    message: Yup.string()
    .min(10)
    .required('Ce champ est obligatoire'),
    
});



export const FormContact = (props) => (
  <FormulaireWrapper>
    <Heading content="Une question ?"/>
    <Text  content="Nos conseillers sont à votre disposition"/>
    <Formik
      initialValues={{
        nom: '',
        email: '',
        tel:'',
        message:'',
        type:'Devis'
      }}
      validationSchema={DevisSchema}
      onSubmit={values => {
        fetch('/api/contact', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }).then((res) => {
          const formContainer = document.querySelector('#' + props.id + ' .formContainer');
          const form = document.querySelector('#' + props.id);
          let markup;
          const btn = document.querySelector('button');
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
          form.removeChild(form.childNodes[1]);
          formContainer.insertAdjacentHTML('afterbegin', markup);
      }, (error) => {
          console.log(error.text);
      });
      }}
    >
      {({ errors, touched }) => (
      <Fade left duration={500}>
        <Form id={props.id}>
          {/* <input name="type" id="type" type="hidden" value="Devis"/> */}
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
            <label htmlFor="message">Message*</label>
            <Field as="textarea" name="message" id="message" cols="50"/>
            {errors.message && touched.message ? (
              <div className="errors">{errors.message}</div>
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
