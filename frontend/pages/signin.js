import Signin from '../components/Signin';
import styled from 'styled-components';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  min-height: 80vh;
`;

const SigninPage = props => (
  <Columns>
    <div />
    <Signin />
    <div />
  </Columns>
);

export default SigninPage;
