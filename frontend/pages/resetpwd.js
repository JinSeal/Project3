import requestReset from '../components/requestReset';
import styled from 'styled-components';
import RequestReset from '../components/requestReset';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  min-height: 80vh;
`;

const Page = props => (
    <Columns>
        <div />
        <RequestReset />
        <div />
    </Columns>
);

export default Page;