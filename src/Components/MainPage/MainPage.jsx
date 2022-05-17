import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import icon from "../../Assets/Images/Professor.png";
import styles from './MainPage.module.css'

const MainPage = () => {
  return (
    <Box
      sx={{
        padding: 15,
      }}
    >
      <img className={styles.icon} src={icon} alt="img error"/>
      <Typography
        sx={{
          fontSize: 20,
          float: 'left'
        }}
      >
        <div style={{fontSize: 80}}>
          Welcome!
        </div>
        <br/>
        Информационно-вычислительный центр НГТУ. Панель администрирования
      </Typography>
    </Box>
  );
};

export default MainPage;