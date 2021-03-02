import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  InputAdornment,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Header from "../header/Header.jsx";
import userServices from "../../services/user_services.js";
import "./register.scss";
const Register = () => {
  const [snackbarActive, setsnackbarActive] = useState(false);
  const [snackBarSeverity, setSnackBarSeverity] = useState("success");
  const [snackBarMesage, setsnackBarMesage] = useState("Register successfully");
  const [fname, SetFname] = useState("");
  const [lname, SetLname] = useState("");
  const [email, SetEmail] = useState("");
  const [subDomain, setSubDomain] = useState("");
  const [phone, SetPhone] = useState("");

  const [fnameHelperText, SetFnameHelperText] = useState(" ");
  const [lnameHelperText, SetLnameHelperText] = useState(" ");
  const [emailHelperText, SetEmailHelperText] = useState(" ");
  const [subDomainHelperText, setSubDomainHelperText] = useState(" ");
  const [phoneHelperText, SetPhoneHelperText] = useState(" ");

  const [fnameFlag, SetFnameFlag] = useState(false);
  const [lnameFlag, SetLnameFlag] = useState(false);
  const [emailFlag, SetEmailFlag] = useState(false);
  const [subDomainFlag, setSubDomainFlag] = useState(false);
  const [phoneFlag, SetPhoneFlag] = useState(false);

  const namePattern = "^[A-Za-z ]{3,}$";
  const subDomainPattern = "^[A-Za-z ]{3,}$";
  const emailPattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  const mobilePattern = "^[0-9]{10}$";


  const closeSnackbar = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setsnackbarActive(false);
  };

  const validate = (e) => {
    console.log(e.target.name);
    if (e.target.name === "fName") {
      if (e.target.value.length === 0) {
        SetFnameFlag(true);
        SetFnameHelperText("Require");
      } else {
        if (e.target.value.match(namePattern)) {
          SetFnameFlag(false);
          SetFnameHelperText(" ");
          SetFname(e.target.value);
        } else {
          SetFnameFlag(true);
          SetFnameHelperText("3 or more char.");
        }
      }
    }
    if (e.target.name === "lname") {
      if (e.target.value.length === 0) {
        SetLnameFlag(true);
        SetLnameHelperText("Require");
      } else {
        if (e.target.value.match(namePattern)) {
          SetLnameFlag(false);
          SetLnameHelperText(" ");
          SetLname(e.target.value);
        } else {
          SetLnameFlag(true);
          SetLnameHelperText("3 or more char.");
        }
      }
    }
    if (e.target.name === "email") {
      if (e.target.value.length === 0) {
        SetEmailFlag(true);
        SetEmailHelperText("Require");
      } else {
        if (e.target.value.match(emailPattern)) {
          SetEmailFlag(false);
          SetEmailHelperText(" ");
          SetEmail(e.target.value);
        } else {
          SetEmailFlag(true);
          SetEmailHelperText("Please Enter Valid E-mail");
        }
      }
    }
    if (e.target.name === "subDomain") {
      if (e.target.value.length === 0) {
        setSubDomainFlag(true);
        setSubDomainHelperText("Require");
      } else {
        if (e.target.value.match(subDomainPattern)) {
          setSubDomainFlag(false);
          setSubDomainHelperText(" ");
          setSubDomain(e.target.value);
        } else {
          setSubDomainFlag(true);
          setSubDomainHelperText("3 or more char.");
        }
      }
    }
    if (e.target.name === "phone") {
      if (e.target.value.length === 0) {
        SetPhoneFlag(true);
        SetPhoneHelperText("Require");
      } else {
        if (e.target.value.match(mobilePattern)) {
          SetPhoneFlag(false);
          SetPhoneHelperText(" ");
          SetPhone(e.target.value);
        } else {
          SetPhoneFlag(true);
          SetPhoneHelperText("10 or more char.");
        }
      }
    }
  };

  const checkSignUpAuthentication = () => {
    let fnameLengthFlag = true;
    let lnameLengthFlag = true;
    let emailLengthFlag = true;
    let subDomainLengthFlag = true;
    let phoneLengthFlag = true;

    if (fname.length < 1) {
      fnameLengthFlag = false;
      SetFnameFlag(true);
      SetFnameHelperText("Require");
    }
    if (lname.length < 1) {
      lnameLengthFlag = false;
      SetLnameFlag(true);
      SetLnameHelperText("Require");
    }
    if (email.length < 1) {
      emailLengthFlag = false;
      SetEmailFlag(true);
      SetEmailHelperText("Require");
    }
    if (subDomain.length < 1) {
      subDomainLengthFlag = false;
      setSubDomainFlag(true);
      setSubDomainHelperText("Require");
    }
    if (phone.length < 1) {
      phoneLengthFlag = false;
      SetPhoneFlag(true);
      SetPhoneHelperText("Require");
    }
    if (
      fnameLengthFlag &&
      lnameLengthFlag &&
      emailLengthFlag &&
      phoneLengthFlag &&
      subDomainLengthFlag
    ) {
      if (
        !fnameFlag &&
        !lnameFlag &&
        !emailFlag &&
        !phoneFlag &&
        !subDomainFlag
        // !passwordFlag
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const register = () => {
    if (checkSignUpAuthentication()) {
      let signUpObj = {
        name: fname + " " + lname,
        email_id: email,
        sub_domain: subDomain + ".k12.com",
        // password: password,
        phone: phone,
        // company: company,
      };
      console.log(signUpObj);
      userServices
        .newUserSignUp(signUpObj)
        .then((responce) => {
          console.log(responce);
          if (responce.status === 200) {
            setsnackbarActive(true);
          setSnackBarSeverity("success");
          setsnackBarMesage("Register successfully");
          }
        })
        .catch((error) => {
          console.log(error);
          setsnackbarActive(true);
          setSnackBarSeverity("error");
          setsnackBarMesage("Some error occoured");
        });
    } else {
      console.log("validation not proper");
    }
  };

  return (
    <>
      <div className="register-container">
        <div className="register-header">
          <Header page="register" />
        </div>
        <div className="register-body">
          <div className="register-body-container">
            <div className="register-body-header">
              <Typography variant="h5" className="register-body-header1">
                Register to Multi-Tenant Application
              </Typography>
            </div>
            <div className="register-from">
              <TextField
                required
                variant="outlined"
                margin="dense"
                label="First Name"
                name="fName"
                error={fnameFlag}
                helperText={fnameHelperText}
                value={fname}
                onChange={(e) => SetFname(e.target.value)}
                onBlur={validate}
                className="register-fname"
              />
              <TextField
                required
                variant="outlined"
                margin="dense"
                label="Last Name"
                name="lname"
                helperText={lnameHelperText}
                error={lnameFlag}
                value={lname}
                onChange={(e) => SetLname(e.target.value)}
                onBlur={validate}
                className="register-lname"
              />
              <TextField
                fullWidth
                required
                variant="outlined"
                margin="dense"
                label="Email"
                name="email"
                error={emailFlag}
                helperText={emailHelperText}
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
                onBlur={validate}
                className="register-email"
              />
              {/* <TextField
                fullWidth
                multiline
                rowsMax={4}
                required
                variant="outlined"
                margin="dense"
                label="Address"
                name="address"
                error={addressFlag}
                helperText={addressHelperText}
                value={address}
                onChange={(e) => SetAddress(e.target.value)}
                onBlur={validate}
                className="register-address"
              /> */}

              {/* <FormControl
                variant="outlined"
                margin="dense"
                className="register-company"
              >
                <InputLabel>Company</InputLabel>
                <Select value={company} onChange={handleChange} label="Company">
                  <MenuItem value="K12">K12</MenuItem>
                  <MenuItem value="Orchids">Orchids</MenuItem>
                  <MenuItem value="AOL">Always On Learning</MenuItem>
                </Select>
              </FormControl> */}
              <TextField
                required
                variant="outlined"
                margin="dense"
                label="Phone No."
                name="phone"
                value={phone}
                error={phoneFlag}
                helperText={phoneHelperText}
                onChange={(e) => SetPhone(e.target.value)}
                onBlur={validate}
                className="register-phone"
              />
              <TextField
                required
                variant="outlined"
                margin="dense"
                label="Sub-domain"
                name="subDomain"
                className="sub-domain"
                error={subDomainFlag}
                helperText={subDomainHelperText}
                value={subDomain}
                onChange={(e) => setSubDomain(e.target.value)}
                onBlur={validate}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">.k12.com</InputAdornment>
                  ),
                }}
              />

              {/* <TextField
                fullWidth
                required
                variant="outlined"
                margin="dense"
                label="Password"
                name="password"
                value={password}
                error={passwordFlag}
                helperText={passwordHelperText}
                type={showPassword ? "text" : "password"}
                onChange={(e) => SetPassword(e.target.value)}
                onBlur={validate}
                className="register-password"
                InputProps={{
                  // <-- toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                        className="toggle-password"
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
              /> */}
            </div>

            <div className="body-action-button">
              <Button
                variant="outlined"
                size="medium"
                className="register-button"
                onClick={register}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackbarActive}
        autoHideDuration={5000}
        onClose={closeSnackbar}
      >
        <Alert onClose={closeSnackbar} severity={snackBarSeverity}>
          {snackBarMesage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Register;
