import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import Box from '../../../../common/src/components/Box';
import Text from '../../../../common/src/components/Text';
import Heading from '../../../../common/src/components/Heading';
import FeatureBlock from '../../../../common/src/components/FeatureBlock';
import { OffresPamaga } from '../../../../common/src/data/Saas';
import Container from '../../../../common/src/components/UI/Container';
import FeatureSectionWrapper from './featureSection.style';

const FeatureSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  return (
    <FeatureSectionWrapper id="OffresPamaga">
      <Container>
        <Box {...sectionHeader}>
          <Heading
            content="Les offres PAMAGA CAR"
            {...sectionTitle}
            />
          <Text content="Simplifiez l'acquisition de votre nouveau véhicule" {...sectionSubTitle} />
        </Box>
        <Box className="row" {...row}>
          {OffresPamaga.map((feature, index) => (
            <Box className="col" {...col} key={index}>
              <Link href={feature.path}>
              <FeatureBlock
                icon={<i className={feature.icon} />}
                wrapperStyle={blockWrapperStyle}
                iconStyle={iconStyle}
                contentStyle={contentStyle}
                title={<Text content={feature.title} {...featureTitle} />}
                className="saasFeature"
              />
              </Link>
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// FeatureSection default style
FeatureSection.defaultProps = {
// section header default style
sectionHeader: {
  mt: '80px',
  mb: ['10px', '10px', '10px', '40px'],
},
// sub section default style
sectionSubTitle: {
  as: 'p',
  display: 'block',
  textAlign: 'center',
  fontSize: '20px',
  color: '#343d48cc',
  mb: '10px',
},
// section title default style
sectionTitle: {
  textAlign: 'center',
  fontSize: ['20px', '24px'],
  fontWeight: '500',
  color: '#343d48cc',
  letterSpacing: '-0.025em',
  mb: '0',
},
// feature row default style
row: {
  flexBox: true,
  flexWrap: 'wrap',
},
// feature col default style
col: {

  width: [1, 1 / 2, 1 / 3, 1 / 3],
  flexBox: true,
  flexWrap: 'nowrap',
  display: 'flex',
  flexDirection:'row',
  alignItems: 'center',
  justifyContent: 'center',
},
// feature block wrapper default style
blockWrapperStyle: {
  p: ['30px', '20px', '20px', '20px'],

},
// feature icon default style
iconStyle: {
  width: ['70px', '75px', '75px', '84px'],
  height: ['70px', '75px', '75px', '84px'],
  borderRadius: '50%',
  display: 'flex',
  // bg: '#93d26e',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: ['32px', '36px'],
  color: '#ffffff',
  overflow: 'hidden',
  mb: ['20px', '20px', '20px', '30px'],
},
// feature content default style
contentStyle: {
  textAlign: 'center',

},
// feature title default style
featureTitle: {
  fontSize: ['18px', '20px'],
  fontWeight: '400',
  color: '#343d48cc',
  lineHeight: '1.5',
  mb: ['10px', '10px', '10px', '20px'],
  letterSpacing: '-0.020em',
},
// feature description default style
featureDescription: {
  fontSize: '15px',
  lineHeight: '1.75',
  color: '#343d4ccc',
},
};

export default FeatureSection;
