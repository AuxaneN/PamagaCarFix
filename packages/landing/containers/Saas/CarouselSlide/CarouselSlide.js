import React from 'react';
import CarouselSlideWrapper from './CarouselSlide.style.js';

// image, marque, modele, sousmodele, prix
export const CarouselSlide = (props) => (
  <CarouselSlideWrapper>
    <img src={props.image}/>
    <div className="infoContainer">
      <div className="infos">
        <p className="marque">{props.marque}</p>
        <p className="modele">{props.version}</p>
        <p className="sousmodele">{props.sousversion}</p>
      </div>
      <p className="prix">&Agrave; partir de <br></br>
      <span>{props.prix}</span>
      </p>
    </div>
  </CarouselSlideWrapper>
)