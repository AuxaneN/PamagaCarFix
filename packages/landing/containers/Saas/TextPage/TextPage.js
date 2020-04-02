import React from 'react';

import Box from '../../../../common/src/components/Box';
import Heading from '../../../../common/src/components/Heading';

import TextPageWrapper from './TextPage.styles';

const TextPage = (props) => (

  <TextPageWrapper>
    <Heading content={props.title} />
    <Box className="paragraphWrapper">
      <div>{props.children}</div>
    </Box>
  </TextPageWrapper>

);

export default TextPage;