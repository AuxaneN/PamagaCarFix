import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`

&#service_section{
  .col{
    &:hover{
      box-shadow:0px 8px 20px 0px rgba(16,66,97,0.1);
    }
    .feature__block{
      &:hover{
        cursor:default;
      }
    }
  }
}
  padding: 80px 0 80px 0;
  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
  }
  .col{
    @media (max-width: 767px) {
      margin:5px;
  }
    h2{
      font-size:20px;
    }
    background:#ffffff;
    box-shadow:0px 8px 20px 0px rgba(16,66,97,0.1);
    border-radius: 10px;
    width:30%;
    margin:10px;
    transition:0.3s ease-in;
    &:hover{
      box-shadow: 0px 16px 35px 0px rgba(16,66,97,0.2);
      transition:0.3s ease-in;
    }
    
  }
  .feature__block {
    position: relative;
    height: 100%;
    transition: box-shadow 0.3s ease;
    cursor:pointer;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    p{
      margin-bottom:0px;
    }
    @media (max-width: 500px) {
      padding: 30px 0;
    }
    .icon__wrapper {
      position: relative;
      border-bottom-left-radius: 6px;
      overflow: hidden;
      i{
      display:flex;
      justify-content:center;
      align-items:center;
      }
      .flaticon-flask {
        &:before {
          margin-left: 8px;
        }
      }
    }
  }
  `;

export default FeatureSectionWrapper;
