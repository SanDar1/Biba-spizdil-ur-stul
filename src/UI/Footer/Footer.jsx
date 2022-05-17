import React from 'react';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box'
import styles from './Footer.module.css'
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      className={styles.box}
      sx={{
        padding: 5,
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign='center'>
          <Typography
            sx={{
              fontSize: 15,
              color: 'dimgray'
            }}
          >
            Нижегородский Государственный Технический Университет им. Р. Е. Алексеева <a href='https://www.nntu.ru' className={styles.footerLink}>www.nntu.ru</a>
            <br/>
            Разработано: ОИС — Отдел Информационных Систем НГТУ, {new Date().getFullYear()} г
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;