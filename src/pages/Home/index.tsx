import React from 'react';
import logo from '../../assets/images/logo.svg';
import styles from './Home.module.scss';

const Home: React.FC = () => (
  <>
    <img src={logo} className={styles.logo} alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <a
      className={styles.link}
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </>
);

export default Home;
