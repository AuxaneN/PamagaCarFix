import styled from 'styled-components'

const CustomBlogSectionWrapper = styled.section`
  margin-top:100px;
  max-width:1000px;
  margin-left:auto;
  margin-right:auto;
  .sectionHeader{
    text-align:center;
    width:90%;
    margin-top:20px;
    margin-left:auto;
    margin-right:auto;
  }
  .blogArticle{
    img{
      width:100%;
    }
    h2{
      margin:0px
    }
    p.date{
      margin-top:0px;
      color:#c2c2c2!important;
    }

    background: #ffffff;
    box-shadow: 0px 15px 25px 0px rgba(16,66,97,0.15);
    padding:40px;
    border-radius:15px;
    width:90%;
    margin: 50px auto;
    p{
      white-space:pre-line;
    }
  }
  @media screen AND (max-width:500px){
  margin-top:100px;
  .container{
    padding:0px!important;
  }
  img{
    display:none;
  }
  .sectionHeader{
    margin-top:40px;
  }
  .blogArticle{
    width:90%;
  }
}
`
export default CustomBlogSectionWrapper;