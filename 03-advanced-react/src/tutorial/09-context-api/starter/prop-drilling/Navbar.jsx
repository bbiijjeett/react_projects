import React from 'react';
import { useState } from 'react';
import NavLinks from './NavLinks';

export const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });
  const logout = () => {
    setUser(null);
  };

  return (
    <nav className='navbar'>
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  )
}

export default Navbar;
