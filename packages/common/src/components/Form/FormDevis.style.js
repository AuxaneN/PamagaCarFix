import styled from 'styled-components';


export const FormulaireWrapper = styled.div`
  
  &.hidden{
    display:none;
  }
  position:fixed;
  z-index:99;
  transform:translateY(-50%) translateX(-50%);
  top:50%;
  left:50%;
  background-color:rgba(0,0,0,0.3);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100vw;
  height:100vh;

  form{
    .closeFormBtn{
    position:absolute;
    top:20px;
    right:20px;
    cursor:pointer;
    }
    display:flex;

    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:1100px;
    width:100%;
    height:100%;
    margin-left:auto;
    margin-right:auto;
    box-shadow: 0px 16px 35px 0px rgba(16,66,97,0.2);
    background-color:#fff;
    border-radius:10px;
    padding:20px;

    p{
      text-align:center;
    }
    button{
      margin-top:10px;
      width:100px;
    }
    .formContainer{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:flex-start;
    }
    .formGroup{
      margin-top:20px;
      justify-self:flex-start;
      position:relative;
      .errors{
        color:red;
      }
      label{
        color:#343d48cc ;
      }
      label[for]:focus,label[for]:active{
        position: absolute;
        bottom:0px;
        color:red;
      }
      &.radio{
        flex: 45% 0 0;
        label:first-child{
          margin-bottom:20px;
          display:block;
        }
        input,label{
          display:inline-block;
        }
        input{
          margin-right:20px;
          height:initial;
        }
      }
    }
    .formGroup:not(.radio){
      flex:45% 0 0;
      input,label,select, textarea{
        width:100%;
      }
      input,select{
        height:30px;
        border:#cccacacc 1px solid;
        border-width: 0px 0px 1px 0px;
      }
    }
    .formGroup:nth-child(1n+1){
      margin-left:20px;
    }
  }
  @media screen AND (max-width: 600px){
    position:absolute;
    transform:translateY(-50%) translateX(-50%);
    /* top:30vh; */
    height:2000px;
    form{
      width:90%;
      margin-top:50px;
        .closeFormBtn{
          font-size:20px;
          top:50px;
          right:30px;
        }
      .formGroup, .formGroup:not(.radio), .formGroup:nth-child(1n+1){
        flex:100% 0 0;
        margin-left:0px;
      }
    }
    
   }
`;


