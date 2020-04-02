import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Text from '../../../../common/src/components/Text';
import Heading from '../../../../common/src/components/Heading';
import Box from '../../../../common/src/components/Box';
import firebase from '../../../firebase';

import Button from '../../../../common/src/components/Button';
import { CAROUSEL_SLIDES } from '../../../../common/src/data/Saas';
import Container from '../../../../common/src/components/UI/Container';
import GlideCarousel from '../../../../common/src/components/GlideCarousel';
import {CarouselSlide} from '../CarouselSlide/CarouselSlide';
import GlideSlide from '../../../../common/src/components/GlideCarousel/glideSlide';
import CarouselWrapper from './Carousel.style';

import Contact from '../../Saas/Contact/ContactDevis';


export class TestimonialSection extends Component {
  constructor(props){
    super(props)

    this.state = {
      carouselSlide: []
    }
  }

  render(){


    const glideOptions = {
    type: 'carousel',
    perView: 3,
    breakpoints:{
      2000:{
        perView: 3
      },
      1200: {
        perView: 3
      },
      600: {
        perView: 2
      },
  }
  }
  
  return (
    <CarouselWrapper id="testimonial_section">
      <Container>
      <Box className="carousel-header">
        <Heading 
        content="Véhicules neufs"
        className="carousel-title"/>
        <Text
        content="Pamaga Car vous propose des voitures neuves multi-marques" 
        className="sectionDescription"/>
      </Box>
        <GlideCarousel
          options={glideOptions}
          buttonWrapperStyle={this.props.btnWrapperStyle}
          nextButton={
            <div className="carousel__arrows arrow_right">
            <span>&nbsp;</span>
            </div>
          }
          prevButton={
            <div className="carousel__arrows arrow_left">
            <span>&nbsp;</span>
            </div>
          }
          numberOfBullets={this.state.carouselSlide.length}
          bulletWrapperStyle={this.props.bulletWrapperStyle}
        >
          <Fragment>
            {this.state.carouselSlide.map(item => (
              <GlideSlide key={item.id}>
                <CarouselSlide
                image={item.image}
                marque={item.marque}
                modele={item.version}
                sousmodele={item.sousversion}
                prix={item.prix}
                />
              </GlideSlide>
            ))}
          </Fragment>
        </GlideCarousel>
       <Contact content="Faite une demande de devis" content2="et recevez une offre sur mesure"/>

      </Container>
    </CarouselWrapper>
  );
};
}
// TestimonialSection style props
TestimonialSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  btnStyle: PropTypes.object,
  btnWrapperStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  commentStyle: PropTypes.object,
  designationStyle: PropTypes.object,
};

// TestimonialSection default style
TestimonialSection.defaultProps = {
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '20px',
    ml: 'auto',
    mr: 'auto',
    pl: '12px',
    maxWidth: '954px',
  },
  // client comment style
  commentStyle: {
    color: '#343d48cc',
    fontWeight: '400',
    fontSize: ['22px', '22px', '22px', '30px'],
    lineHeight: '1.72',
    mb: '47px',
  },
  // client name style
  nameStyle: {
    as: 'h3',
    color: '#343d48',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '30px',
    mb: 0,
  },
  // client designation style
  designationStyle: {
    as: 'h5',
    color: 'rgba(52, 61, 72, 0.8)',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '30px',
    mb: 0,
    ml: ['0', '10px'],
  },
  // glide slider nav controls style
  btnWrapperStyle: {
    position: 'absolute',
    bottom: '50%',
    left: '0px',
  },
  // next / prev btn style
  btnStyle: {
    minWidth: 'auto',
    minHeight: 'auto',
    mr: '13px',
    fontSize: '16px',
    color: '#343d484d',
  },
  
};

export default TestimonialSection;
