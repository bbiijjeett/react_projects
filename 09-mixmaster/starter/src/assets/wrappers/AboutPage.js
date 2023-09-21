import styled from 'styled-components';

const Wrapper = styled.div`

  background: rgba( 0, 0, 0, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 3.5px );
  -webkit-backdrop-filter: blur( 3.5px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding: 2rem 2.5rem;
  margin: 3rem auto;

  h3 {
    color: #fa709a;
  }
  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
`;

export default Wrapper;
