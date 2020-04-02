import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Box from '../../../../common/src/components/Box';
import Text from '../../../../common/src/components/Text';
import Heading from '../../../../common/src/components/Heading';
import Button from '../../../../common/src/components/Button';
import Card from '../../../../common/src/components/Card';
import Image from '../../../../common/src/components/Image';
import FeatureBlock from '../../../../common/src/components/FeatureBlock';
import Container from '../../../../common/src/components/UI/Container';
import VisitorSectionWrapper, { SectionObject } from './visitor.style';

import Contact from '../../../containers/Saas/Contact/ContactReprise';

import ImageOne from '../../../../common/src/assets/image/saas/repriseimg.png';
import ImageBg from '../../../../common/src/assets/image/saas/visitor_bg.png';

const VisitorSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle,
}) => {
  return (
    <VisitorSectionWrapper id="visitorSection">
      <SectionObject>
        <Card className="objectWrapper" {...imageWrapper}>
          <Zoom>
            <Image src={ImageBg} alt="BgImage" />
          </Zoom>
          <Card className="dashboardWrapper" {...imageWrapper}>
            <Fade left>
              <Image src={ImageOne} alt="VisitorDashboard1" />
            </Fade>
          </Card>
        </Card>
      </SectionObject>
      <Container>
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content="Acheter un véhicule avec Pamaga Car, c’est la garantie d’avoir une offre de rachat de
                votre ancien véhicule."
                {...title}
              />
            }
            description={
              <Text
                content={
                  <>
                    <p>Simplifiez-vous la vie et optez pour notre offre de reprise de votre ancien véhicule.</p>
                    <span style={{color:'#ef4923', fontWeight:'700'}}>Pamaga Car reprend votre véhicule en l’état</span>
                    <ul>
                      <li>&#x25cf; Pas de contrôle technique à fournir même si votre véhicule a plus de 4 ans</li>
                      <li>&#x25cf; Nous récupérons votre ancienne voiture le jour où vous prenez possession de votre nouveau
                    véhicule. </li>
                      <li>&#x25cf; Vous n’avez plus à vous préoccuper de la vente de votre ancien véhicule.</li>
                    </ul>
                    <p>Un véhicule Pamaga Car vous intéresse ? <br />
                      Faite une demande de reprise de votre véhicule actuel</p>
                  </>
                }
                {...description}
              />
            }
            button={
              <Link href="/demande-de-reprise">
                 <Button title="Ma demande de reprise" />
              </Link>
            }
          />
        </Box>
      </Container>
    </VisitorSectionWrapper>
  );
};

VisitorSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

VisitorSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    ml: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '48px'],
    fontWeight: '700',
    color: '#343d48cc',
    letterSpacing: '0',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.2',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default VisitorSection;
