import styled from 'styled-components';


export const FormulaireWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:40px 0px;
  z-index:50;
  form{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:900px;
    width:100%;
    height:auto;
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
      margin-top:40px;
      width:100px;
    }
    .formContainer{
    display:flex;
    flex-direction:column;
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
    }
    .formGroup{
      flex:45% 0 0;
      input,label,textarea{
        width:100%;
        display:block;
      }
      input,select{
        height:30px;
        border:#cccacacc 1px solid;
        border-width: 0px 0px 1px 0px;
      }
    }

  }
`;


