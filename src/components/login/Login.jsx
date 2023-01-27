import React from "react";
import webLogo from "../../Assets/Frame.png";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import "./login.css";
import { fontStyle, fontWeight } from "@mui/system";
const Login = () => {
  return (
    <>
      <div className="login-page">
        <div className="logo-side column">
          <h2>Welcome To App</h2>
          <p>
            Get ahead of the curve. Join the next generation of health heroes.
          </p>
          <img src={webLogo} alt="" />
        </div>
        <div className="input-side column">
          <p>Sign-in to your account</p>
          <TextField
            sx={{ m: 1, minWidth: 294 }}
            id="outlined-basic"
            placeholder="Username"
            variant="outlined"
          />
          <TextField
            sx={{ m: 1, minWidth: 294 }}
            id="outlined-basic"
            placeholder="Password"
            variant="outlined"
          />
          {/* //select */}
          <FormControl sx={{ m: 1, minWidth: 294 }}>
            <InputLabel>Select Unit Name</InputLabel>
            <Select
              //   displayEmpty
              className="select"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="Select Unit Name">
                <em>ss</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <div className="sign-btn">
            <Button
              variant="contained"
              sx={{ m: 1, minWidth: 293 }}
              style={{
                backgroundColor: "#FC6964",
                borderRadius: "12px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize:"16px",
                fontWeight: "700",
                fontFamily: "Inter",
                fontStyle:"normal"
              }}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
