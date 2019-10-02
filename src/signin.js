import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import userManager from "userManager";
import CallbackPage from "CallbackPage";

import axios from "axios";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignIn = props => {
  const classes = useStyles();

  const login = () => {
    // pass the current path to redirect to the correct page after successfull login
    userManager.signinRedirect({
      data: { path: props.path }
    });
  };

  // wait for user to be loaded, and location is known
  if (props.isLoadingUser || !props.location) {
    return <div>Loading...</div>;
  }

  const url = props.location.pathname.substring(0, 9);
  if (url === "/callback") {
    const rest = props.location.pathname.substring(9);
    return <CallbackPage {...props} signInParams={`${url}#${rest}`} />;
  }

  // check if user is signed in
  userManager.getUser().then(user => {
    if (user && !user.expired) {
      // Set the authorization header for axios
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + user.access_token;
      // props.handler(false);
      return null;
    }
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          style={{ fontFamily: '"Vazir"' }}
        >
          ورود به سیستم
        </Typography>
        <form className={classes.form} noValidate>
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ fontFamily: '"Vazir"' }}
            onClick={() => login()}
          >
            ورود
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        مدیریت پسماند شهرداری شیراز
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function mapStateToProps(state) {
  return {
    user: state.oidc.user,
    isLoadingUser: state.oidc.isLoadingUser,
    location: state.router.location
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
