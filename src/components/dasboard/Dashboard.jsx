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

//mui
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
            <Card sx={{ maxWidth: 408, height: 616 }}>
              <CardContent>
                <img src={prkimg} alt="" />
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
