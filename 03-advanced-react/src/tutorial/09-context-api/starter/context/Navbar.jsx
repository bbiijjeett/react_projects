import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import NavLinks from './NavLinks';

export const NavbarContext = createContext();

// console.log(NavbarContext);

// custom hooks

export const useAppContext = () => useContext(NavbarContext);


export const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });
  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar' >
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar;
