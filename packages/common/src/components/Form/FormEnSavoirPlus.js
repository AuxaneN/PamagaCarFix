import React from "react";
import * as Yup from "yup";

import {Field, Form, Formik, FormikProps} from 'formik';

import Text from '../Text';
import Button from '../Button';
import Fade from 'react-reveal/Fade';
import {FormulaireWrapper} from './FormDevis.style';

const DevisSchema = Yup.object().shape({
    email: Yup.string()
    .email(),
    tel:Yup.string()
    .matches(/^\d{10}$/, 'Veuillez entrer un numéro de téléphone valide'),
});



export const FormEnSavoirPlus = (props) => (
  <FormulaireWrapper onClick={props.click} className={ props.hidden ? 'hidden' : null}>
    <Formik
      initialValues={{
        email: '',
        tel:'',
      }}
      validationSchema={DevisSchema}
      onSubmit={values => {
        fetch('/api/ensavoirplus', {
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
          btn.setAttribute('disabled', 'disabled');
          let markup;
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
        <Text content="Nous vous recontacterons très prochainement !"/>
        <span className="closeFormBtn">✖</span>
          <div className="formContainer">


            <div className="formGroup">
              <label htmlFor="email">E-mail</label>
              <Field type="text" name="email" id="email" type="email" />
              {errors.email && touched.email ? <div className="errors">{errors.email}</div> : null}
            </div>
          <Text content="Ou"/>
            <div className="formGroup">
            <label htmlFor="tel">Téléphone</label>
            <Field type="text" name="tel" id="tel"/>
            {errors.tel && touched.tel ? (
              <div className="errors">{errors.tel}</div>
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
