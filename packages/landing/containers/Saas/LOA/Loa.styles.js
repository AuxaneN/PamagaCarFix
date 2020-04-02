import styled from 'styled-components';

const LOAWrapper = styled.section`
  @media screen AND (max-width:500px){
    text-align:center;
  }
  max-width:1300px;
  margin-left:auto;
  margin-right:auto;
  padding: 100px 0 100px;
  .row{
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    .col{
      width: 45%;
      padding-left:30px;
      @media screen AND (max-width: 700px){
        padding-left:0px;
        margin-top: 40px;
      }
      p{
        line-height: 1.5;
      }
    }
    img{
      max-width:570px!important;
      max-height:710px;
      width:50%;
      height:50%;

    }
    @media screen AND (max-width:700px){
      flex-wrap:wrap;
      .col{
        width:100%;
      }
      img{
        width:100%;
        height:100%;
        max-width:570px;
        max-height:710px!important;
      }
    }

  }
`;

export default LOAWrapper;