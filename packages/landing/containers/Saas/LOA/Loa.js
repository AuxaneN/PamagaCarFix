import React from 'react';
import Box from '../../../../common/src/components/Box';
import Text from '../../../../common/src/components/Text';
import Heading from '../../../../common/src/components/Heading';
import Container from '../../../../common/src/components/UI/Container';
import LOAWrapper from './Loa.styles';
import Image from '../../../../common/src/components/Image';
import infograph from '../../../../common/src/assets/image/saas/infograph.png';

import Fade from 'react-reveal/Fade';

const Loa = () => (

  <LOAWrapper id="loa">
    <Container>
      <Box className="row">
      <img
      src={infograph}
      alt="Comment ça marche ?"
      />
      <Box className="col">
        <Heading content="Optez pour la LOA Pamaga Car : Location avec Option d’Achat"/>
        <Fade bottom cascade>
          <Text 
          className="subtitle"
          content="Les avantages de la LOA"/>
          <Text content={
            <>
              <p>Profitez d’un loyer réduit par rapport à un crédit classique aux mêmes conditions d’apport et de
              durée. <br /> Vous ne financez que la différence entre le prix d’achat du véhicule et l’option d’achat.</p>
              <p>Avec la LOA, vous payez uniquement l’usage du véhicule et non plus le prix d’usure</p>
              <p>Votre location est flexible, vous pouvez ajuster vos mensualités chaque année en fonction du
              kilométrage parcouru et de votre usage.</p>
              <ul>À la fin de votre contrat, vous avez le choix :
                <li>&#x25cf; Changer en choisissant un nouveau véhicule Pamaga Car et nous reprenons le vôtre sur la
            base de la valeur convenue lors de la mise en place du contrat.</li>
                <li>&#x25cf; Garder le véhicule et en devenir l’heureux propriétaire en réglant l’option d’achat.</li>
                <li>&#x25cf; Vendre votre véhicule par vos propres moyens en devenant propriétaire et choisir un nouveau
            véhicule Pamaga Car.</li>
              </ul>
              <p>Choisir la LOA vous permet de changer régulièrement de véhicule sans vous soucier de la
              revente. Vous bénéficiez également d’une offre sur mesure adapté à vos envies et votre mode de
              vie.</p>
            </>
          } />
 
        </Fade>
        </Box>
      </Box>
    </Container>
  </LOAWrapper>


)

export default Loa