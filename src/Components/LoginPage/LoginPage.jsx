import React from 'react';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import styles from './LoginPage.module.css'

const LoginPage = () => {
  return (
    <div>
      <Typography>
        Вход
      </Typography>
      <Avatar>
      </Avatar>
      <TextField
        className={styles.input}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Электронная почта"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <br />
      <TextField
        className={styles.input}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Пароль"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Войти
      </Button>
    </div>
  );
};

export default LoginPage;