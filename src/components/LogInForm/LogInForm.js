import { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import * as usersService from "../../utilities/users-service.js";

import useStyles from "./styles.js";

export default function LogInForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const classes = useStyles();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log in failed - Try Again')
    }
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={`${classes.root} ${classes.form}`}
      >
        <Typography variant="h6">Email</Typography>
        <TextField
          variant="outlined"
          label="Email"
          fullWidth
          name="email"
          value={credentials.email}
          onChange={handleChange}
          required
          className={classes.TextField}
        />
        <Typography variant="h6">Password</Typography>
        <TextField
          variant="outlined"
          label="Password"
          fullWidth
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
          className={classes.TextField}
        />
        <Button
          type="submit"
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          LOG IN
        </Button>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </Paper>
  );
}
