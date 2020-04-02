import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../common/src/components/Box';
import Text from '../../../../common/src/components/Text';
import Image from '../../../../common/src/components/Image';
import FeatureBlock from '../../../../common/src/components/FeatureBlock';
import {BLOG} from '../../../../common/src/data/Saas';
import Container from '../../../../common/src/components/UI/Container';
import BlogSectionWrapper from './blogSection.style';
import Contact from '../../../containers/Saas/Contact/ContactDevis';

import Fade from 'react-reveal/Fade'

const  BlogSection = ({
  row,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
}) => {
  
  return (
    <BlogSectionWrapper id="blogSection">
      <Container>
        <Box {...sectionHeader}>
          <Fade bottom cascade>
          <Text content="Trouvez LE véhicule adapté à votre budget" {...sectionTitle} />
          <Text
            content="Votre mandataire automobile Pamaga Car vous propose des véhicules multi-marques et des
            utilitaires neufs, d’occasions, en leasing."
            {...sectionSubTitle}
          />
          <Text
            content="Rapide et efficace, Pamaga Car c’est la garantie de trouver ensemble un véhicule qui correspond
            à vos besoins."
            {...sectionSubTitle}
          />
          </Fade>
        </Box>
        <Box className="row" {...row}>
          {BLOG.map((post, index) => (
          
           <FeatureBlock
              key={`post_key-${index}`}
              id={`post_id-${post.id}`}
              className="blog__post"
              icon={
                <a href={post.postLink}>
                <Image
                  src={post.thumbnail_url}
                  alt={`Blog Image ${post.id}`}
                  title={post.title}
                  className="blog__image"
                />
                </a>
              }
            />
          ))}
        </Box>
        <Contact content="Demandez un devis" content2="Gratuit et sans engagement" id="devis1"/>
      </Container>
    </BlogSectionWrapper>
  );
};

// BlogSection style props
BlogSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  blogTitle: PropTypes.object,
  blogMeta: PropTypes.object,
};

// BlogSection default style
BlogSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px'],
  },
  // sub section default style
  sectionSubTitle: {
    as: 'p',
    display: 'block',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '400',
    color: '#343d48cc',
    mt:'10px',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    as : "h2",
    textAlign: 'center',
    fontSize: ['30px', '35px'],
    fontWeight: '700',
    color: '#343d48cc',
    letterSpacing: '-0.025em',
    mb: '10',
  },
  // Blog post row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent:'center',
    ml: '-12px',
    mr: '-12px',
  },

};

export default BlogSection;
