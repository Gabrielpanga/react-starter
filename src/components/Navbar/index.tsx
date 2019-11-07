import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import locations from '../../routes';

const Navbar = () => (
  <ul className={styles['list']}>
    <li>
      <NavLink to={locations.root()}>Home</NavLink>
    </li>
    <li>
      <NavLink to={locations.users()}>Users</NavLink>
    </li>
    <li>
      <NavLink to={locations.properties()}>Properties</NavLink>
    </li>
  </ul>
);

export default Navbar;
