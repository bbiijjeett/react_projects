import styled from 'styled-components';

const Wrapper = styled.div`
  
  /* margin-bottom: 6rem; */
  /* background-color: #181818; */
  background-color: transparent;
 color: white;
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
    /* background-color: #181818; */
    background-color: transparent;
    box-shadow: none;
    /* background: rgba( 0, 0, 0, 0.4 ); */
    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 8px );
    -webkit-backdrop-filter: blur( 8px );
    border-radius: 10px; */
    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */

  }
  .form-input {
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    background-color: #181818;
    color: white !important;
  }
  .btn {
    cursor: pointer;
    background: none;
    border: none;
    text-align: center;
    font-size: 1rem;
    color: whitesmoke;
    background-color: #fa709a;
    padding: 0.8rem 1.8rem;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }
`;

export default Wrapper;
