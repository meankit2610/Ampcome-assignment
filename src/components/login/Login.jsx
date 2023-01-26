import React from "react";
import webLogo from "../../Assets/Frame.png";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import "./login.css";
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
            <Select
            //   displayEmpty
                          className="select"
              inputProps={{ "aria-label": "Without label" }}
              placeholder="Select Unit Name"
            >
              <MenuItem value="Select Unit Name">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default Login;
