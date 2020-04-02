import styled from 'styled-components';

const BlogSectionWrapper = styled.section`
  padding: 80px 0;
  overflow: show;
  @media (max-width: 990px) {
    padding: 60px 0;
  }
  @media (max-width: 767px) {
    padding: 40px 0;
  }

  .feature__block {
    &.blog__post {
      border-radius: 10px;
      overflow: show;
      position: relative;
      background-color:#fff;
      box-shadow: 0px 8px 20px 0px rgba(16,66,97,0.2);
      width: 250px;
      height: 277px;
      margin: 0px 12px;
      transition: all 0.3s ease;
      @media only screen and (max-width: 1200px) {
        width: 250px;
        height: 277px;
      }
      @media only screen and (max-width: 991px) {
        width: 250px;
      height: 277px;
      margin: 10px 10px;
      }
      @media only screen and (max-width: 767px) {
        width: 250px;
      height: 277px;
      margin: 20px 10px;
      }
      &:hover{
        transition: all 1s ease-out;
        box-shadow: 0px 15px 30px 0px rgba(16,66,97,0.4);
      }
      .icon__wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        &.gatsby-image-wrapper {
          height: 100%;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .content__wrapper {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-color: rgba(0, 0, 0, 0.9);
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
        transition: all 0.3s ease;
        a {
          transform: translateY(50px);
          transition: all 0.3s ease;
        }
        p {
          transform: translateY(50px);
          transition: all 0.35s ease;
        }
      }

      &:hover {
        .content__wrapper {
          opacity: 1;
          visibility: visible;
          a {
            transform: translateY(0);
          }
          p {
            transform: translateY(0);
          }
        }
      }
      &:first-child {
        .content__wrapper {
          @media (max-width: 990px) {
            opacity: 1;
            visibility: visible;
            a {
              transform: translateY(0);
            }
            p {
              transform: translateY(0);
            }
          }
        }
      }
    }
  }
`;

export default BlogSectionWrapper;
