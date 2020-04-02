import styled from 'styled-components';

const CarouselWrapper = styled.section`
  padding: 80px 0;
  width:100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  overflow: show;
  .carousel-header{
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    .carousel-title{
      font-size: 30px;
      color: #ef4923;
      font-weight: 700;
    }
  }
  
  @media screen AND (max-width:700px){
    max-width: 100%;
    width:100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0px;
    padding-right: 0px;
    .carousel__arrows {
      display:none;
    }
  }

  .glide__controls{
    transform: translateY(50%);
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
.carousel__arrows  {
  position: relative;
  padding: 20px;
  border: none;
  overflow: hidden;
  outline: 0;
  font-size: 0;
  line-height: 0;
  background-color: #ffffff60;
  border-radius:10px;
  cursor:pointer;
  span {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    border-style: solid;
    border-color: #ef4923;
    border-width:3px 3px 0 0;
    padding: 5px;
    transition: 0.3s;
    font-size: 0;
  }
  &:hover {
    background-color: lighten(#7b59ff, 3%);
    span {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        border-style: solid;
        border-color: #ef4923;
        border-width:4px 4px 0 0;
        padding: 10px/2;
        transition: 0.3s;
        font-size: 0;
    }

    &:enabled {
        background-color: lighten(#7b59ff, 3%);
        span {
            border-color: #f94530;
            margin: 0;
        }
    }
  }
  
  &:disabled {
    background-color: #cccccc;
  }
}

.arrow_left {
  span {
    transform: translate(-50%, -50%) rotate(-135deg);
    margin-left: 0.35 * (10px -3px);
  }
}

.arrow_right {
  span {
    transform: translate(-50%, -50%) rotate(45deg);
    margin-left: -0.35 * (10px - 3px);
  }
}
`;

export default CarouselWrapper;
