import styled from 'styled-components';

const CarouselSlideWrapper = styled.div`
  box-sizing: border-box;
  margin:10px;
  display: flex;
  height:100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
img{
  max-width: 300px;
  width:100%;
}
.infoContainer{
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: flex-start;
  height:auto;
  flex-wrap: nowrap;
}
.infoContainer p{
  margin:0px;
  line-height: 1.5em;
}
.infos{
  flex: 50% 1 0;
}
.marque{
    font-size: 20px;
    font-weight: 600;
    padding-top: 0px;
    margin: 0px;
}
.prix{  
 text-align: right;
  margin-top: 0px;
  flex: 45% 0 1;
}
.prix span{
  color:#ef4923;
  font-size: 1.2em;
  font-weight: 700;
}

@media screen AND (max-width:700px){
  width:auto;
  .infoContainer{
    flex-direction: column-reverse;
  };
}
@media screen AND (min-width:992px){
  .infoContainer{
    flex-wrap: wrap;
  }
}
`;

export default CarouselSlideWrapper;