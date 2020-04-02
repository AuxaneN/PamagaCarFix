import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
  }
  section h2{
    font-size:30px!important;
    font-weight:700!important;
    color:#ef4923!important;
    letter-spacing: -0.020em!important;
  }
  p, ul, ol, li, strong{
    color:#343d48cc;
  }
  section {
    position: relative;
    .container{
      max-width:1300px;
    }
  }
  input,select{
        height:30px;
        border:#cccacacc 1px solid;
        border-width: 0px 0px 1px 0px;
      }
  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        .dropdownContent{
          margin-top:10px;
        }
        .dropdownContent a{
          display:block;
          margin-left:20px;
          padding:10px;
          &:before{
              content: '';
              width: 10px;
              height: 2px;
              background: #ef4923;
              border-radius: 0%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              /* opacity: 0; */
            }
          &:after{
            content: '';
            height: 42px;
            width: 2px;
            background-color: #ef4923;
            position: absolute;
            top: -10px;
            left: -33px;
          }
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: #343d48;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: #ef4923;
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: #ef4923;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              /* opacity: 0; */
            }
          }
          &.is-current {
            a {
              color: #ef4923;
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '✖';
        font-family: Flaticon;
        font-size: 26px;
        color: #ef4923;
        display: block;
      }
    }
  }

  /* BUTTONS STYLES */
  button:not(.hamburgMenu__bar):not(.BrainhubCarousel__arrows){
    background-color:#ef4923!important;
    background-image: linear-gradient( 31deg,rgb(253, 89, 70) 0%,#ef4923)!important;
      cursor: pointer;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      color: #ffffff;
      background-color: #5268db;
      min-height: 46px;
      min-width: 48px;
      border-radius: 3px;
      font-family: inherit;
      font-size: 16px;
      font-weight: 500;
      -webkit-text-decoration: none;
      text-decoration: none;
      text-transform: capitalize;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 15px;
      padding-right: 15px;
      border: 0;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      box-sizing: border-box;

  }
  button:not(.hamburgMenu__bar):not(.BrainhubCarousel__arrows):hover{
    background-color:#ef4923!important;
    box-shadow: 0px 9px 20px -5px rgb(253, 89, 70)!important;
    opacity:1!important;
  }

  /* Modal default style */
  button.modalCloseBtn {
    color: ${themeGet('colors.white', '#ffffff')} !important;

    &.alt {
      background-color: ${themeGet('colors.primary', '#5268db')} !important;
      box-shadow: 0px 9px 20px -5px rgba(82, 104, 219, 0.57) !important;
    }   
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  overflow: hidden;
  a:-webkit-any-link {
    text-decoration: none;
  }
  .sticky-nav-active {
    .hosting_navbar {
      background: #fff;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
      padding: 15px 0;
    }
  }

  .hosting_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;
    .main_menu {
      margin-right: 40px;
      display:flex;
      align-items:flex-start;
      li {
        display: inline-block;
        padding-left: 13px;
        padding-right: 13px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: #ef4923;
          }
        }
        a {
          padding: 5px;
          font-size: 16px;
          font-weight: 400;
          color: #343d48;
          transition: 0.15s ease-in-out;
          &:hover {
            color: #ef4923;
          }
        }
        .dropdown{
          overflow: initial;
          position: relative;
          a{
            padding-bottom:20px;
          }
          .dropdownContent{
            display:none;
            position:absolute;
            height:auto;
            z-index:1;
            transition:all 0.5s ease;

          }
          &:hover .dropdownContent{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            padding-top:10px;
            border-radius:10px;
            box-shadow: 0px 10px 20px 0px rgba(16,66,97,0.1);
            background-color:#fff;
            text-align:center;
            position: absolute;
            transform: translateX(-50%);
            top:30px;
            left: 50%;
            transition:all 0.5s ease;

            a{
              padding:15px 10px;
              width:150px;
              transition:0.5s;
              :hover{
                transition:0.5s;
              }
            }
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button {
      @media (max-width: 990px) {
        display: none;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
        }
      }
    }
  }

  .trial-section {
    background: linear-gradient(to bottom, #fafbff 0%, #f7f8fd 100%);

    .button_group {
      text-align: center;
    }
  }

  @media (max-width: 990px) {
    .glide__slide--active .pricing_table {
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
      border: 0;
    }
  }
`;

export const ButtonGroup = styled.div``;
