import React from "react";
import "./dashboard.css";
import vector from "../../Assets/Vector-1.png"
import appoint from "../../Assets/appoint.png"
import queue from "../../Assets/queue.png";
import rupee from "../../Assets/rupee.png";
import bill from "../../Assets/bill.png";
import set from "../../Assets/set.png";
import customer from "../../Assets/customer.png";
import prkimg from "../../Assets/prkimg.png";
import activ from "../../Assets/activ.png";

//mui
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
            <h2>4000rs</h2>
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
