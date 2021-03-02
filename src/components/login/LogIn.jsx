import {
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import React, { useState } from "react";
import Header from "../header/Header.jsx";
import {
  VisibilityOff as VisibilityOffIcon,
  Visibility as VisibilityIcon,
} from "@material-ui/icons";
import "./logIn.scss";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [domainName, setDomainName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [domainNameHelperText, setDomainNameHelperText] = useState(" ");
  const [emailHelperText, setEmailHelperText] = useState(" ");
  const [passwordHelperText, setPasswordHelperText] = useState(" ");

  const [domainNameFlag, setDomainNameFlag] = useState(false);
  const [emailFlag, setEmailFlag] = useState(false);
  const [passwordFlag, setPasswordFlag] = useState(false);

  const emailPattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  const passwordPattern =
    "(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[*.!@$%^&(){}:;<>,?/~_+=|]).{8,}";

  const validate = (e) => {
    console.log(e.target.name);
    if (e.target.name === "domainName") {
      if (e.target.value.length === 0) {
        setDomainNameFlag(true);
        setDomainNameHelperText("Require");
      } else {
        setDomainNameFlag(false);
        setDomainNameHelperText(" ");
        setDomainName(e.target.value);
      }
    }
    if (e.target.name === "loginEmail") {
      if (e.target.value.length === 0) {
        setEmailFlag(true);
        setEmailHelperText("Require");
      } else {
        if (e.target.value.match(emailPattern)) {
          setEmailFlag(false);
          setEmailHelperText(" ");
          setEmail(e.target.value);
        } else {
          setEmailFlag(true);
          setEmailHelperText("Please Enter Valid E-mail");
        }
      }
    }
    if (e.target.name === "loginPassword") {
      if (e.target.value.length === 0) {
        setPasswordFlag(true);
        setPasswordHelperText("Require");
      } else {
        if (e.target.value.match(passwordPattern)) {
          setPasswordFlag(false);
          setPasswordHelperText(" ");
          setPassword(e.target.value);
        } else {
          setPasswordFlag(true);
          setPasswordHelperText(
            "Combination of upper and lower case, number & spc. char."
          );
        }
      }
    }
  };

  const checkLogInAuthentication = () => {
    let domainNameLengthFlag = true;
    let loginEmailLengthFlag = true;
    let loginPasswordLengthFlag = true;
    if (domainName.length < 1) {
      domainNameLengthFlag = false;
      setDomainNameFlag(true);
      setDomainNameHelperText("Require");
    }
    if (email.length < 1) {
      loginEmailLengthFlag = false;
      setEmailFlag(true);
      setEmailHelperText("Require");
    }
    if (password.length < 1) {
      loginPasswordLengthFlag = false;
      setPasswordFlag(true);
      setPasswordHelperText("Require");
    }
    if (
      domainNameLengthFlag &&
      loginEmailLengthFlag &&
      loginPasswordLengthFlag
    ) {
      if (!domainNameFlag && !emailFlag && !passwordFlag) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const logIn = () => {
    if (checkLogInAuthentication()) {
      let logInObj = {
        domain: domainName,
        email: email,
        password: password,
      };
      console.log(logInObj);
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="login-header">
          <Header page="login" />
        </div>
        <div className="login-body">
          <div className="login-body-container">
            <Typography variant="h5" className="login-body-header1">
              Admin Login
            </Typography>
            <Typography variant="h6" className="login-body-header2">
              Find Out Your Domain First
            </Typography>
            <TextField
              fullWidth
              required
              variant="outlined"
              margin="dense"
              label="Domain Name"
              name="domainName"
              helperText={domainNameHelperText}
              error={domainNameFlag}
              value={domainName}
              onChange={(e) => setDomainName(e.target.value)}
              onBlur={validate}
              className="domain-name"
            />
            <TextField
              fullWidth
              required
              variant="outlined"
              margin="dense"
              label="Email"
              name="loginEmail"
              helperText={emailHelperText}
              value={email}
              error={emailFlag}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validate}
              className="login-email"
            />
            <div className="login-password-area">
              <TextField
                fullWidth
                required
                error={passwordFlag}
                name="loginPassword"
                margin="dense"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                className="logIn-password-Field"
                label="Password"
                helperText={passwordHelperText}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onBlur={validate}
                InputProps={{
                  // <-- toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        className="toggle-password-eye"
                        aria-label="toggle password visibility"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="body-action-button">
              <Button
                variant="outlined"
                size="medium"
                className="login-button"
                onClick={logIn}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
