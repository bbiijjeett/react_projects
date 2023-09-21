import styled from 'styled-components';

const Wrapper = styled.div`
  header {
    color: white;
    text-align: center;
    margin-bottom: 3rem;
  }
  .btn {
      margin-top: 2rem;
      margin-bottom: 2rem;
      text-align: center;
      /* float: left; */
      float: right;
      cursor: pointer;
      background: none;
      border: none;
      text-align: center;
      font-size: 1rem;
      color: whitesmoke;
      background-color: #fa709a;
      padding: 0.8rem 1.8rem;
      border-radius: 2rem;
  }

  .btn:hover {
    color: black;
    background-color: white;
  }

  .img {
    border-radius: 30px;
  }
  .drink-info {
    padding-top: 2rem;
  }
  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
    color: whitesmoke;
    font-weight: 200;
  }
  .drink-data {
    margin-right: 0.5rem;
    /* background: var(--primary-300); */
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    /* color: var(--primary-700); */
    color: whitesmoke;
    letter-spacing: var(--letterSpacing);
    font-weight: 500;
  }

  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }

  .insturctArr{
    padding-left: 2rem;
    text-decoration: underline;
  }

  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
`;

export default Wrapper;
