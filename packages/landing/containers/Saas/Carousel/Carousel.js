import React from 'react';
import firebase from '../../../firebase';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import Text from '../../../../common/src/components/Text';
import Box from '../../../../common/src/components/Box';
import Heading from '../../../../common/src/components/Heading';

import {CarouselSlide} from '../CarouselSlide/CarouselSlide';
import CarouselWrapper from './Carousel.style';
import Contact from '../../Saas/Contact/ContactDevis';



export class CarCarousel extends React.Component {
  constructor() {
    super()
    this.state = { 
      value: 0,
      carouselSlide:[]
     };

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }
  componentDidMount(){
    const db = firebase.firestore();
    const carouselSlide = [];
    db.collection("CAROUSEL_SLIDES")
    .get()
    .then(function(querySnapshot){
      querySnapshot.forEach(function(doc) {
        carouselSlide.push({
          id: doc.id,
          image: doc.data().image,
          marque:doc.data().marque,
          version:doc.data().version,
          sousversion:doc.data().sousversion,
          prix:doc.data().prix
        });
      })
    })
    .then( () => {
      this.setState({carouselSlide : [...this.state.carouselSlide,...carouselSlide]})
    })

  }

  render() {
    return (
    <CarouselWrapper id="neufs">
      <Box className="carousel-header">
        <Heading 
        content="Véhicules neufs"
        className="carousel-title"/>
        <Text
        content="Pamaga Car vous propose des voitures neuves multi-marques" 
        className="sectionDescription"/>
      </Box>
      {
        <Carousel
        value={this.state.value}
        onChange={this.onChange}
        slides={this.state.carouselSlide.map( item => (
          <CarouselSlide
            key={item.id}
            image={`/images/carouselImg/` + item.image}
            marque={item.marque}
            version={item.version}
            sousversion={item.sousversion}
            prix={item.prix}
          />
          ))}
        arrows
        dots
        slidesPerScroll={1}
        breakpoints={{
          2000:{
            slidesPerPage: 3,
          },
          1200: {
            slidesPerPage: 3,
          },
          600: {
            slidesPerPage: 2,
          },
        }}
      />
      }
     
    <Contact content="Faite une demande de devis" content2="et recevez une offre sur mesure" id="devisNeuf"/>
   </CarouselWrapper>
    );
  }
}
