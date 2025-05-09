import { Button, Paper, TextField, Typography } from "@mui/material";
import styles from "./Login.module.scss";

const LoginPage: React.FC = () => {
  return (
    <div className={styles.main}>
      <Typography variant="h3">Grid Warrior</Typography>
      <Paper className={styles.form}>
        <TextField label="Email" type="email" />
        <TextField label="Password" type="password" />
        <Button>Log In</Button>
      </Paper>
    </div>
  );
};

export default LoginPage;
