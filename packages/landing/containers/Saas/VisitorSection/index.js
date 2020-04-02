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

import ImageOne from '../../../../common/src/assets/image/saas/saasvisitor1.png';
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
                content="Vous cherchez un financement pour votre nouvelle voiture ?"
                {...title}
              />
            }
            description={
              <Text
                content="PAMAGA CAR vous propose un financement sur mesure, adapté à vos besoins ! Crédit classique
                ou location avec option d’achat, optez pour l’option qui vous correspond. Nous vous mettons en
                relation avec notre large réseau de partenaire financier et vous aidons à constituer votre dossier.
                Nous prenons également en charge toutes les démarches administratives"
                {...description}
              />
            }
            button={
              <Link href="/reprise-et-financement">
                <a>
                  <Button title="En savoir plus…" {...btnStyle} />
                </a>
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
