import { Button, Typography } from "@material-ui/core";
import React from "react";
import vsCodeLogo from "../../assets/image/vsCodeLogo.png";
import history from "../../History.js";
import "./header.scss";
const Header = ({ page }) => {
  return (
    <div className="header-comtainer">
      <div className="header-items">
        <div className="header-image">
          <img src={vsCodeLogo} alt="header" className="header-pic" />
          <Typography variant="h5" className="company-name">
            Multi-Tenant Application
          </Typography>
        </div>
        <div className="header-action-button">
          {page === "login" && (
            <Button
              className="header-register-button"
              onClick={() => history.push("/register")}
            >
              Register
            </Button>
          )}
          {page === "register" && (
            <Button
              className="header-login-button"
              onClick={() => history.push("/login")}
            >
              LogIn
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
