import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../common/src/components/Box';
import Card from '../../../../common/src/components/Card';
import Image from '../../../../common/src/components/Image';
import Text from '../../../../common/src/components/Text';
import Heading from '../../../../common/src/components/Heading';
import Button from '../../../../common/src/components/Button';
import FeatureBlock from '../../../../common/src/components/FeatureBlock';
import Container from '../../../../common/src/components/UI/Container';
import PartnerHistoryWrapper, { CounterUpArea } from './partnerHistory.style';
import Image1 from '../../../../common/src/assets/image/saas/occasions/voiture1.png';
import Image2 from '../../../../common/src/assets/image/saas/occasions/voiture2.png';
import Image3 from '../../../../common/src/assets/image/saas/occasions/voiture3.png';
import Image4 from '../../../../common/src/assets/image/saas/occasions/voiture4.png';

import ContactDevis from '../Contact/ContactDevis';

const PartnerHistory = ({
  row,
  col,
  cardStyle,
  title,
  btnStyle,
  cardArea,
  description
}) => {
  return (
    <PartnerHistoryWrapper id="occasions">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col} style={{ flexDirection: 'column' }}>
            <Heading content="Véhicules d’occasions"{...title}/>
            <Text  content="Vous souhaitez acquérir un véhicule d’occasion ? Avec Pamaga Car, trouvez une voiture sans
              vous déplacer. Faite nous l’inventaire de vos besoins et nous prenons en charge les recherches
              de votre véhicule d’occasion. Chez Pamaga Car, nous adaptons le véhicule à vos besoins et votre
              mode de vie." {...description}/>
            <Text  content="Nos conseillers sont disponibles et à l’écoute pour vous guider dans votre projet d’acquisition de
              véhicule." {...description}/>
            <Text  content="Pour plus de confiance, chaque véhicule Pamaga Car fait l’objet d’un contrôle qualité. Nous nous
              assurons que le véhicule n’a jamais été accidenté et que les papiers sont en règle." {...description}/>
            <ContactDevis content="Je recherche un véhicule" id="JeChercheUnVehicule"/>
          </Box>
          <Box className="col" {...col} {...cardArea}>
            <CounterUpArea>
              <Card className="card" {...cardStyle}>
                <Image src={Image1} alt="Renault Clio" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={Image2} alt="Citroën C3" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={Image3} alt="Renault Scenic" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={Image4} alt="Renault Mégane" />
              </Card>
            </CounterUpArea>
          </Box>
        </Box>
      </Container>
    </PartnerHistoryWrapper>
  );
};

// Partner style props
PartnerHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

// Partner default style
PartnerHistory.defaultProps = {
  // Partner section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Partner section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  // Card default style
  cardStyle: {
    p: '53px 40px 35px',
    borderRadius: '10px',
    boxShadow: '0px 8px 20px 0px rgba(16, 66, 97, 0.07)',
  },
  // Partner section title default style
  title: {
    fontSize: ['24px', '26px', '30px', '36px', '48px'],
    fontWeight: '300',
    color: '#343d48cc',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '490px', '490px'],
    textAlign: ['center', 'left'],
  },
  // Partner section description default style
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2',
    mb: '10px',
    textAlign: ['center', 'left'],
  },
  sectionSubTitle: {
    as: 'span',
    textAlign: 'left',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#1a73e8',
    mb: '10px',
    textAlign: ['center', 'left'],
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  cardArea: {
    pl: [0, 0, '40px', 0, 0],
  },
};

export default PartnerHistory;
