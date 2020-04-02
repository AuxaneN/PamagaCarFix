import React from 'react';

import Box from '../../../../common/src/components/Box';
import Text from '../../../../common/src/components/Text';
import Heading from '../../../../common/src/components/Heading';
import BannerImage from '../../../../common/src/assets/image/saas/montageV2.png';
import FullWidthImageWrapper from './FullWidthImage.styles';



import Image from '../../../../common/src/components/Image';

export const FullWidthImage = () => (
  <FullWidthImageWrapper>
    <Box className="container">
      <Image src={BannerImage} alt="PAMAGA CAR, C’EST LA GARANTIE D’UN VÉHICULE D’OCCASION DE QUALITÉ"/>
    </Box>
  </FullWidthImageWrapper>
)