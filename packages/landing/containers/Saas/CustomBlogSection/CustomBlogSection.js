import React, {Component} from 'react';
import firebase from '../../../firebase';
import CustomBlogSectionWrapper from './CustomBlogSection.styles.js';

import Box from '../../../../common/src/components/Box';
import Text from '../../../../common/src/components/Text';
import Heading from '../../../../common/src/components/Heading';
import Container from '../../../../common/src/components/UI/Container';
import Fade from 'react-reveal/Fade';
import { components } from 'react-select';
// import {ARTICLE_BLOG} from '../../../../common/src/data/Saas/index';

export class CustomBlogSection extends Component{
  constructor(){
    super();
    this.state = {
      articles : []
    }
  }

  componentDidMount(){
    const db = firebase.firestore();
    const articles = [];
    db.collection("ARTICLE_BLOG")
    .get()
    .then(function(querySnapshot){
      querySnapshot.forEach(function(doc) {
        articles.push({
          id: doc.id,
          titre:doc.data().titre,
          // date:doc.data().date,
          article: doc.data().article,
          imageUrl: doc.data().imageUrl
        });
      })
    })
    .then( () => {
      this.setState({articles :[...this.state.articles, ...articles]}, console.log(articles))
    })
  }
  

  render(){
    return(
      <CustomBlogSectionWrapper id="blog_section">
      <Container>
        <Box className="sectionHeader">
          <Heading className="title" content="Retrouvez nos dernières publications"/>
        </Box>
        <Box>
        {
          this.state.articles.map(article => (
            <Fade bottom key={article.id}>
              <Box className="blogArticle" >
                <img src={`/images/blogHeader/${article.imageUrl}`} alt={article.titre}/>
                <h2>{article.titre}</h2>
                <p className="date">{article.date}</p>
                <p>{article.article}</p>
              </Box>
            </Fade>
          ))
        }
        </Box>
      </Container>
    </CustomBlogSectionWrapper>)
  }
  
};

