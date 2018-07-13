import React, { Component } from "react";
import PropTypes from "prop-types";
import { propTypes, reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import compose from "recompose/compose";

import {
  CardActions,
  CircularProgress,
  Typography,
  Card,
  Button,
  TextField
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { Notification, translate, userLogin } from "react-admin";

const styles = theme => ({
  main: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "flex-start",
    background: theme.palette.secondary.main
  },
  card: {
    minWidth: 300,
    marginTop: "10em",
    padding: "1em"
  },
  title: {
    margin: "1em",
    display: "flex",
    justifyContent: "center"
  },
  icon: {
    backgroundColor: theme.palette.primary.main
  },
  form: {
    padding: "0 1em 1em 1em"
  },
  input: {
    marginTop: "1em",
    minHeight: "5em"
  },
  actions: {
    padding: "0 1em 1em 1em",
    marginTop: "1em",
    display: "flex",
    flexDirection: "column"
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    marginBottom: "1em",
    height: "3em"
  },
  field: {
    borderColor: theme.palette.primary.main
  }
});

// see http://redux-form.com/6.4.3/examples/material-ui/
const renderInput = ({
  meta: { touched, error } = {},
  input: { ...inputProps },
  ...props
}) => (
  <TextField
    error={!!(touched && error)}
    helperText={touched && error}
    {...inputProps}
    {...props}
    fullWidth
  />
);

class Login extends Component {
  login = auth =>
    this.props.userLogin(
      auth,
      this.props.location.state ? this.props.location.state.nextPathname : "/"
    );

  render() {
    const { classes, handleSubmit, isLoading, translate, title } = this.props;
    return (
      <div className={classes.main}>
        <Card className={classes.card}>
          <div className={classes.title}>
            <Typography variant="display1">{title}</Typography>
          </div>
          <form onSubmit={handleSubmit(this.login)}>
            <div className={classes.form}>
              <div className={classes.input}>
                <Field
                  name="username"
                  validation={{ required: true }}
                  component={renderInput}
                  label={translate("ra.auth.username")}
                  disabled={isLoading}
                />
              </div>
              <div className={classes.input}>
                <Field
                  name="password"
                  validation={{ required: true }}
                  component={renderInput}
                  label={translate("ra.auth.password")}
                  type="password"
                  disabled={isLoading}
                />
              </div>
            </div>
            <CardActions className={classes.actions}>
              <Button
                variant="raised"
                type="submit"
                color="primary"
                disabled={isLoading}
                className={classes.button}
                fullWidth
              >
                {isLoading && <CircularProgress size={25} thickness={2} />}
                {translate("ra.auth.sign_in")}
              </Button>
            </CardActions>
          </form>
        </Card>
        <Notification />
      </div>
    );
  }
}

Login.propTypes = {
  ...propTypes,
  authProvider: PropTypes.func,
  classes: PropTypes.object,
  previousRoute: PropTypes.string,
  translate: PropTypes.func.isRequired,
  userLogin: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ isLoading: state.admin.loading > 0 });

const enhance = compose(
  translate,
  reduxForm({
    form: "signIn",
    validate: (values, props) => {
      const errors = {};
      const { translate } = props;
      if (!values.username) {
        errors.username = translate("ra.validation.required");
      }
      if (!values.password) {
        errors.password = translate("ra.validation.required");
      }
      return errors;
    }
  }),
  connect(
    mapStateToProps,
    { userLogin }
  ),
  withStyles(styles)
);

export default enhance(Login);
