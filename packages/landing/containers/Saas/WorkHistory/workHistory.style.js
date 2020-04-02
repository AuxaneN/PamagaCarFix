import styled from 'styled-components';
import client from '../../../../common/src/assets/image/saas/clientheureux.png';

import { themeGet } from 'styled-system';

const WorkHistoryWrapper = styled.section`
  padding: 70px 0 80px;
  background:url(${client}) no-repeat top left;
  background-color:#ef4923;
  background-size:cover;
  overflow: show;
  @media (max-width: 990px) {
    padding: 50px 0 150px 0;
  }
  .col {
    max-height:639px;
    height:600px;
    @media (max-width: 700px){
      .col:first-child{
        height:auto;
      }
    }
    .feature__block{
      width:100%;
      height:100%;
      display:flex;
      justify-content:center;
      align-items:center;

      h2{
        text-shadow: 0px 0px 10px rgba(150, 150, 150, 1);
      }
    }
    @media only screen and (max-width: 1200px) {
      height: 600px;
    }
    @media only screen and (max-width: 991px) {
      height: 400px;
    }
    @media only screen and (max-width: 767px) {
      height: auto;
      .feature__block{
        background-size:cover;
      }
    }
    /* .bg{
      width:inherit;
      height:auto;
      position:absolute;
      z-index:-1;
      width:auto;
    } */
  }
  .feature__block {
    @media only screen and (max-width: 1200px) {
      padding-right: 32px;
    }
    @media only screen and (max-width: 991px) {
      padding-right: 0;
      margin-bottom: 0;
    }
    @media only screen and (max-width: 767px) {
      padding-right: 0;
      margin-bottom: 40px;
    }
    .reusecore__button {
      transition: all 0.3s ease;
      &:hover {
        box-shadow: 0px 9px 20px -5px rgba(16, 172, 132, 0.57);
      }
    }
  }
`;

const CounterUpArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;

  @media only screen and (max-width: 1200px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 991px) {
    padding-right: 0;
    margin-left: -25px;
  }
  @media only screen and (max-width: 480px) {
    margin-left: 0;
  }
  .card {
    width: calc(50% - 25px);
    margin-left: 25px;
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: box-shadow 0.3s ease-in-out;
    background-color:#fff;
    @media (max-width: 767px) {
      width: calc(50% - 13px);
      &:nth-child(2n + 1) {
        margin-left: 0;
      }
      #contact_section{
        div[class^=FormulaireWrapper]{
          transform:translateX(-20%)!important;
        }
      }
    }

    &:hover {
      box-shadow: 0px 16px 35px 0px rgba(16, 66, 97, 0.1);
    }

    h3 {
      font-size: 60px;
      font-weight: 300;
      margin: 0 0 20px;
      color: ${themeGet('colors.headingColor', '#343d48cc')};
      @media (max-width: 990px) {
        font-size: 40px;
      }
      @media (max-width: 767px) {
        margin-bottom: 10px;
      }
    }

    p {
      color: ${themeGet('colors.headingColor', '#343d48cc')};
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 7px;
      @media (max-width: 990px) {
        font-size: 14px;
        text-align: center;
      }
    }

    a {
      color: ${themeGet('colors.linkColor', '#2b9eff')};
      font-weight: 500;
      font-size: 15px;
      text-decoration: underline;
      margin-top: 7px;
      @media (max-width: 1190px) {
        font-size: 14px;
        text-align: center;
      }
    }

    &:nth-child(even) {
      position: relative;
      top: 22px;
    }

    &:last-child {
      box-shadow: none;
      border-radius: 5px;
      border: 2px dashed ${themeGet('colors.inactiveIcon', '#ebebeb')};
    }
  }
`;

export { CounterUpArea };
export default WorkHistoryWrapper;
