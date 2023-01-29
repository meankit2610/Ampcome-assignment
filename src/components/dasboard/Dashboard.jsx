import React from "react";
import "./dashboard.css";
import vector from "../../Assets/Vector-1.png";
import appoint from "../../Assets/appoint.png";
import queue from "../../Assets/queue.png";
import rupee from "../../Assets/rupee.png";
import bill from "../../Assets/bill.png";
import set from "../../Assets/set.png";
import customer from "../../Assets/customer.png";
import prkimg from "../../Assets/prkimg.png";
import activ from "../../Assets/activ.png";
import earn from "../../Assets/earn.png";

//mui
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Dashboard = () => {
  return (
    <>
      <div className="topbar">
        <div>
          <span
            style={{
              fontSize: "34px",
              color: "white",
              fontWeight: "200",
              letterSpacing: "0.06em",
            }}
          >
            Welcome
          </span>{" "}
          <span
            style={{
              fontSize: "34px",
              color: "white",
              fontWeight: "bold",
              letterSpacing: "0.06em",
            }}
          >
            {" "}
            Anil Kumar
          </span>
        </div>
      </div>
      <div className="container">
        <div className="sidebar">
          <div>
            <img src={vector} alt="" />
          </div>
          <div>
            <img src={queue} alt="" />
          </div>
          <div>
            <img src={appoint} alt="" />
          </div>
          <div>
            <img src={rupee} alt="" />
          </div>
          <div>
            <img src={bill} alt="" />
          </div>
          <div>
            <img src={set} alt="" />
          </div>
          <div className="customer-icon">
            <img src={customer} alt="" />
          </div>
        </div>
        <div className="card-space">
          <div className="selection-card">
            <div className="earning">
              <div className="img">
                <img src={earn} alt="" style={{ margin: "20px" }} />
              </div>
              <div>
                <p
                  style={{
                    marginTop: "20px",
                    color: "#29375F",
                    fontSize: "14px",
                  }}
                >
                  Total Earning
                </p>
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "#29375F",
                  }}
                >
                  ₹4000
                </p>
              </div>
            </div>
            <div className="selector">
              <div>
                <Box sx={{ width: 200 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Age"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>

              {/* 2nd */}
              <div>
                <Box sx={{ width: 200 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Time Duration
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Age"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
          </div>
          <div className="detail-card">
            <div className="details">
              <p>Appointments</p>
              <h4>54</h4>
            </div>
            <div className="details">
              <p>EMR Finalised</p>
              <h4>47</h4>
            </div>
            <div className="details">
              <p>Patient Registrations</p>
              <h4>120</h4>
            </div>
            <div className="details">
              <p>KR4ALL Visits</p>
              <h4>30</h4>
            </div>
          </div>
          <div className="activity-card">
            <Card sx={{ width: 408, height: 516 }}>
              <CardContent>
                <img src={prkimg} alt="bell" style={{ marginLeft: "20px" }} />
                <div className="notify">
                  <NotificationsActiveIcon
                    style={{ color: "5F88D2", marginRight: "10px" }}
                  />
                  <p>ACTIVITY</p>
                </div>
                <div className="notifications-container">
                  <div className="logo">
                    <img src={activ} alt="" />
                  </div>
                  <div className="message">
                    <h4>User Activity</h4>
                    <p>Vivek Kumar accepted the invitation</p>
                  </div>
                  <div className="logo">
                    <img src={activ} alt="" />
                  </div>
                  <div className="message">
                    <h4>User Activity</h4>
                    <p>Vivek Kumar accepted the invitation</p>
                  </div>
                  <div className="logo">
                    <img src={activ} alt="" />
                  </div>
                  <div className="message">
                    <h4>User Activity</h4>
                    <p>Vivek Kumar accepted the invitation</p>
                  </div>
                  <div className="logo">
                    <img src={activ} alt="" />
                  </div>
                  <div className="message">
                    <h4>User Activity</h4>
                    <p>Vivek Kumar accepted the invitation</p>
                  </div>
                  <div className="logo">
                    <img src={activ} alt="" />
                  </div>
                  <div className="message">
                    <h4>User Activity</h4>
                    <p>Vivek Kumar accepted the invitation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
