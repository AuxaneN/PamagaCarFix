import styled from 'styled-components';


export const FormulaireWrapper = styled.div`
  margin:100px 0px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100vw;
  height:100vh;
  z-index:50;

  .container{
    text-align:center;
    color:#ef4923;
  }
  form{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:1300px;
    width:100%;
    height:100%;
    margin-left:auto;
    margin-right:auto;
    box-shadow: 0px 16px 35px 0px rgba(16,66,97,0.2);
    background-color:#fff;
    border-radius:20px;
    padding:20px;
    p{
      text-align:center;
    }
    button{
      margin-top:40px;
      width:100px;
      &.disabled{
        background-color:grey!important;
      }
    }
    .formContainer{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    }
    .formGroup{
      margin-top:20px;
      justify-self:flex-start;
      position:relative;
      .errors{
        color:red;
      }
      label{
        color:#343d48cc;
        font-size:0.9em;
      }
      label[for]:focus,label[for]:active{
        position: absolute;
        bottom:0px;
        color:red;
      }
      &.radio{
        flex: 40% 0 0;
        label:first-child{
          margin-bottom:20px;
          display:block;
        }
        input,label{
          display:inline-block;
        }
        input, select{
          margin-right:20px;
          height:initial;
        }
      }
      &:not(.radio){
      flex:40% 0 0;
      input,label,select, textarea{
        width:100%;
      }
      input,select{
        height:30px;
        border:#cccacacc 1px solid;
        border-width: 0px 0px 1px 0px;
      }
    }
    }

    .formGroup:nth-child(1n+1){
      margin-left:40px;
    }
    /* .formGroup:nth-child(1),
    .formGroup:nth-child(2),
    .formGroup:nth-child(3){
      flex:33% 0 1;
    } */
  }
  @media screen AND (max-width: 600px){
    margin-top: 100px;
    display:block;
    height:auto;

    form{
      width:90%;

      .formGroup, .formGroup:not(.radio), .formGroup:nth-child(1n+1){
        flex:100% 0 0;
        margin-left:0px;
      }
    }
    
   }
`;


