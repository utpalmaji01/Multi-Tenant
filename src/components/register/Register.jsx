import React, { useState } from "react";
import {
  Button,
  IconButton,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import {
  VisibilityOff as VisibilityOffIcon,
  Visibility as VisibilityIcon,
} from "@material-ui/icons";
import Header from "../header/Header.jsx";
import "./register.scss";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fname, SetFname] = useState("");
  const [lname, SetLname] = useState("");
  const [email, SetEmail] = useState("");
  const [address, SetAddress] = useState("");
  const [company, setCompany] = useState("K12");
  const [phone, SetPhone] = useState("");
  const [password, SetPassword] = useState("");

  const [fnameHelperText, SetFnameHelperText] = useState(" ");
  const [lnameHelperText, SetLnameHelperText] = useState(" ");
  const [emailHelperText, SetEmailHelperText] = useState(" ");
  const [addressHelperText, SetAddressHelperText] = useState(" ");
  const [phoneHelperText, SetPhoneHelperText] = useState(" ");
  const [passwordHelperText, SetPasswordHelperText] = useState(" ");

  const [fnameFlag, SetFnameFlag] = useState(false);
  const [lnameFlag, SetLnameFlag] = useState(false);
  const [emailFlag, SetEmailFlag] = useState(false);
  const [addressFlag, SetAddressFlag] = useState(false);
  const [phoneFlag, SetPhoneFlag] = useState(false);
  const [passwordFlag, SetPasswordFlag] = useState(false);

  const namePattern = "^[A-Za-z ]{3,}$";
  const addressPattern = "^[A-Za-z ]{10,}$";
  const emailPattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  const passwordPattern =
    "(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[*.!@$%^&(){}:;<>,?/~_+=|]).{8,}";
  const mobilePattern = "^[0-9]{10}$";

  const handleChange = (event) => {
    setCompany(event.target.value);
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
    if (e.target.name === "address") {
      if (e.target.value.length === 0) {
        SetAddressFlag(true);
        SetAddressHelperText("Require");
      } else {
        if (e.target.value.match(addressPattern)) {
          SetAddressFlag(false);
          SetAddressHelperText(" ");
          SetAddress(e.target.value);
        } else {
          SetAddressFlag(true);
          SetAddressHelperText("10 or more char.");
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
    if (e.target.name === "password") {
      if (e.target.value.length === 0) {
        SetPasswordFlag(true);
        SetPasswordHelperText("Require");
      } else {
        if (e.target.value.match(passwordPattern)) {
          SetPasswordFlag(false);
          SetPasswordHelperText(" ");
          SetPassword(e.target.value);
        } else {
          SetPasswordFlag(true);
          SetPasswordHelperText(
            "Combination of upper and lower case, number & spc. char."
          );
        }
      }
    }
  };

  const checkSignUpAuthentication = () => {
    let fnameLengthFlag = true;
    let lnameLengthFlag = true;
    let emailLengthFlag = true;
    let addressLengthFlag = true;
    let phoneLengthFlag = true;
    let passwordLengthFlag = true;

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
    if (address.length < 1) {
      addressLengthFlag = false;
      SetAddressFlag(true);
      SetAddressHelperText("Require");
    }
    if (phone.length < 1) {
      phoneLengthFlag = false;
      SetPhoneFlag(true);
      SetPhoneHelperText("Require");
    }
    if (password.length < 1) {
      passwordLengthFlag = false;
      SetPasswordFlag(true);
      SetPasswordHelperText("Require");
    }
    if (
      fnameLengthFlag &&
      lnameLengthFlag &&
      emailLengthFlag &&
      addressLengthFlag &&
      phoneLengthFlag &&
      passwordLengthFlag
    ) {
      if (
        !fnameFlag &&
        !lnameFlag &&
        !emailFlag &&
        !addressFlag &&
        !phoneFlag &&
        !passwordFlag
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
        fullName: fname + " " + lname,
        email: email,
        address: address,
        password: password,
        phone: phone,
        company: company,
      };
      console.log(signUpObj);
    } else {
        console.log("hello");
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
              <TextField
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
              />

              <FormControl
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
              </FormControl>
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
                label="Password"
                name="password"
                value={password}
                error={passwordFlag}
                helperText={passwordHelperText}
                type={showPassword ? "text" : "password"}
                onChange={(e) => SetPassword(e.target.value)}
                onBlur={validate}
                className="register-password"
              />
              <IconButton
                size="small"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="toggle-password"
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
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
    </>
  );
};

export default Register;
