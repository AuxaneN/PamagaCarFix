import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../common/src/components/Box';
import Text from '../../../../common/src/components/Text';
import Image from '../../../../common/src/components/Image';
import Heading from '../../../../common/src/components/Heading';
import FeatureBlock from '../../../../common/src/components/FeatureBlock';
import Container from '../../../../common/src/components/UI/Container';

import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

import BannerWrapper, {
  BannerObject,
} from './bannerSection.style';

import BannerObject1 from '../../../../common/src/assets/image/saas/banner/bannerObject1.png';
import BannerObject2 from '../../../../common/src/assets/image/saas/banner/bannerObject2.png';

const BannerSection = ({
  row,
  col,
  title,
  subtitle,
  description,
}) => {

  return (
    <BannerWrapper id="banner_section">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={
                <Heading
                  content={<> PAMAGA CAR, <br /> VOTRE MANDATAIRE AUTOMOBILE </>}
                  {...title}
                />
              }
              description={
                <Text
                  content="Achat de véhicules neufs, occasions et LOA"
                  {...subtitle}
                />
              }
              additionalContent = {
                <Text
                  content={
                    <ul>
                      <li>&#x25cf; Achetez votre véhicule en toute sécurité !</li>
                      <li>&#x25cf; Faite votre choix parmi notre sélection</li>
                      <li>&#x25cf; Recevez votre véhicule sous 48h* <br />
                      *sous réserve de disponibilités</li>
                   </ul>
                  }
                  {...description}
                />
              }
            />
          </Box>
        </Box>
      </Container>
      <BannerObject>
       
        <div className="objectWrapper">
          <Zoom>
            <Image src={BannerObject1} alt="BannerObject1" />
          </Zoom>
          <div className="dashboardWrapper">
              <Slide right easeIn duration={2000}>
                <Image src={BannerObject2} alt="BannerObject2" />
              </Slide>
          </div>
        </div>
      </BannerObject>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  subtitle: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, '70%', '50%', '45%'],
  },
  title: {
    fontSize: ['30px', '30x', '35px', '35px!important'],
    fontWeight: '700',
    color: '#343d48cc',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.5',
  },
  subtitle: {
    fontSize: '25px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: ['20px', '25px'],
  },
  description: {
    fontSize: '20px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0',
  }
};

export default BannerSection;
