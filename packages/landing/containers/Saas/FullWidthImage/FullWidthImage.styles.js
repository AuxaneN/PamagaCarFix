import styled from 'styled-components';

const FullWidthImageWrapper = styled.section`
@media screen AND (max-width:600px){
  display:none;
}
  background-color:#e67444;
  .container{
    max-width:1100px;
    margin-left:auto;
    margin-right:auto;
  }
`;

export default FullWidthImageWrapper;