import styled from 'styled-components';

const CarouselWrapper = styled.section`
  padding: 80px 0;
  width:100vw;
  height:auto;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  /* overflow: hidden; */
  .carousel-header{
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    text-align: center;
    .carousel-title{
      font-size: 30px;
      color: #343d48cc;
      font-weight: 700;
    }
  }
  .BrainhubCarousel{
    overflow:hidden;
    display:flex;
    flex-direction:row;
    align-items:center;
  }
  .BrainhubCarousel__arrows{
  transition:0.5s;
  border-radius: 5px;
  background-color:#fff;
  span{
    border-color:#f94530;
  }
    &:hover{
      background-color:#fff;
      transition:0.5s;
      span{
        border-width: 5px 5px 0px 0px;
        border-color:#f94530;
      }
    }
    &.BrainhubCarousel__arrowRight{
      margin-right:20px;
    }
    &.BrainhubCarousel__arrowLeft{
      margin-left:20px;
    }
  }
  @media screen AND (max-width:700px){
    max-width: 100%;
    width:100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0px;
    padding-right: 0px;
    .BrainhubCarousel__arrows{
      display:none;
    }
  }

`;

export default CarouselWrapper;
