import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
      <NavLink to="/home">home</NavLink>
      <NavLink to="/friends">Friends</NavLink>
      <NavLink exact to="/about">about</NavLink>
      <NavLink to="/about/culture">Culture</NavLink>
        </nav>
    );
};

export default Header;