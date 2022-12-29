import { Component } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  withStyles,
} from "@material-ui/core";
import { signUp } from "../../utilities/users-service.js";

const styles = (theme) => ({
  TextField: {
    backgroundColor: "#89cc7c",
  },

  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#b6cc76",
    border: "solid 5px #768c3a",
    margin: "20px"
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
});

class SingUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
        const formData = {...this.state};
        delete formData.error;
        delete formData.confirm;
        const user = await signUp(formData)
        this.props.setUser(user)
    } catch {
        this.setState({ error: 'Sign up failed - Try Again' });
    }
  };

  render() {
    const { classes } = this.props;
    const disable = this.state.password !== this.state.confirm;
    return (
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          onSubmit={this.handleSubmit}
          className={`${classes.root} ${classes.form}`}
        >
          <Typography variant="h6">Name</Typography>
          <TextField
            className={classes.TextField}
            variant="outlined"
            label="Name"
            fullWidth
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <Typography variant="h6">Email</Typography>
          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
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
            value={this.state.password}
            onChange={this.handleChange}
            required
            className={classes.TextField}
          />
          <Typography variant="h6">Confirm</Typography>
          <TextField
            variant="outlined"
            label="Confirm"
            fullWidth
            type="password"
            name="confirm"
            value={this.state.confirm}
            onChange={this.handleChange}
            required
            className={classes.TextField}
          />
          <Button
            type="submit"
            disabled={disable}
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            SIGN UP
          </Button>
        </form>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </Paper>
    );
  }
}

export default withStyles(styles)(SingUpForm);
