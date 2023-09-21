import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
        <div className="nav-center">
            <span className='logo'>TheMixerMasters</span>
            <div className="nav-links">
                <NavLink to='/' className='nav-link'>
                    Home
                </NavLink>
                <NavLink to='/about' className='nav-link'>
                    About
                </NavLink>
                <NavLink to='/newsletter' className='nav-link'>
                    Newsletter
                </NavLink>
            </div>
        </div>
    </Wrapper>
  )
};

const Wrapper = styled.nav`
  /* background: var(--white); */
  background-color: transparent;


  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }

  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    /* color: var(--primary-500); */
    /* color: white; */
    color: #fa709a;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .nav-links{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .nav-link{
    /* color: var(--grey-900); */
    color: white;
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 1px;
  }

  .nav-link:hover {
    /* color: var(--primary-500); */
    color: #fa709a;
  }

  .active {
    /* color: var(--primary-500); */
    color: #fa709a;
  }


  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;



export default Navbar;