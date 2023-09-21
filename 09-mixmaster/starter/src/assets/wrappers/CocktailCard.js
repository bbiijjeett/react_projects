import styled from 'styled-components';
// const Wrapper = styled.article`

//   background: var(--white);
//   box-shadow: var(--shadow-2);
//   transition: var(--transition);
//   display: grid;
//   grid-template-rows: auto 1fr;
//   border-radius: var(--borderRadius); 
//   :hover {
//     box-shadow: var(--shadow-4);
//   }
//   img {
//     height: 15rem;
//     border-top-left-radius: var(--borderRadius); 
//     border-top-right-radius: var(--borderRadius);
//     /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
//     backdrop-filter: blur( 3.5px );
//     -webkit-backdrop-filter: blur( 3.5px );
//     border: 1px solid rgba( 255, 255, 255, 0.18 );
//     border-radius: 30px; */
//   }
//   .footer {
//     padding: 1.5rem;
//     h4,
//     h5 {
//       margin-bottom: 0.5rem;
//     }
//     h4 {
//       font-weight: 700;
//     }
//     p {
//       margin-bottom: 1rem;
//       color: var(--grey-500);
//     }
//   }
// `;

const Wrapper = styled.article`
  color: white;
  background: rgba( 0, 0, 0, 0.2 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 3.5px );
  -webkit-backdrop-filter: blur( 3.5px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  display: grid;
  grid-template-rows: auto 1fr;
  .morphismCard{
    aspect-ratio: 3 / 2;
   
    /* display: flex; */
    
    .footer{
      visibility: hidden;
      /* background-color: red; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    :hover {
        .footer {
          height: 100%;
          visibility: visible;
          padding: 1.5rem;
          background: rgba( 0, 0, 0, 0.4 );
          box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
          backdrop-filter: blur( 8px );
          -webkit-backdrop-filter: blur( 8px );
          border-radius: 30px;
          border: 1px solid rgba( 255, 255, 255, 0.18 );
          
          h4,
          h5 {
            margin-bottom: 0.5rem;
            font-size: 1rem;
            font-weight: 500;
          }
          h4 {
            font-size: 2rem;
            font-weight: 700;
          }
          p {
            margin-bottom: 1rem;
            color: white;
            font-weight: 200;
          }

          .btn1 {
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
          .btn1:hover {
            background-color: rgba(255,255,255,0.2);
          }
        }
     }
  
  }

  

`;

export default Wrapper;

