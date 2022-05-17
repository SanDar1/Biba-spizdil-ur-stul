import React from 'react';
import styles from './Header.module.css'
import logo from '../../Assets/Images/headerLogo.png'
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <img src={logo} alt='НГТУ' />
        <Typography className={styles.title}>
          НГТУ им. Р. Е. Алексеева
        </Typography>
        <p>Информационно вычислительный центр НГТУ</p>
      </div>
    </div>
  );
};

export default Header;