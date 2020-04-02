import React, { Fragment } from 'react';
import { Modal } from '@redq/reuse-modal';
import '@brainhubeu/react-carousel/lib/style.css';

import '@redq/reuse-modal/es/index.css';

export default ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Modal />
      <Component {...pageProps} />
    </Fragment>
  );
};
