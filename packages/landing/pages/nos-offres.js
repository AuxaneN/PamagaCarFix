import React, { Fragment } from 'react';
import {CarCarousel} from '../containers/Saas/Carousel/Carousel';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from '../../common/src/theme/saas';
import { ResetCSS } from '../../common/src/assets/css/style.js';
import { GlobalStyle, ContentWrapper } from '../containers/Saas/saas.style';
import Navbar from '../containers/Saas/Navbar';
import FeatureSection from '../containers/Saas/FeatureSection/featureOffres';
import PartnerHistory from '../containers/Saas/PartnerHistory/index';
import Loa from '../containers/Saas/LOA/Loa';

import {FormContact} from '../../common/src/components/Form/FormContact';



import Footer from '../containers/Saas/Footer';
import { DrawerProvider } from '../../common/src/contexts/DrawerContext';

export default () => {
  return (
    <ThemeProvider theme={saasTheme}>
      <Fragment>
        <Head>
        <title>Pamaga Car</title>
          <meta name="Description" content="Votre mandataire automobile" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={49} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <FeatureSection />
          <CarCarousel /> 
          <PartnerHistory/>
          <Loa/>
          <FormContact id="contact3"/>
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
