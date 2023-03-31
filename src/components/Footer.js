import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <footer
      style={{
        bottom: 0,
        background: "black",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" style={{}}>
        <Link to="/">
          <div style={{ display: "inline-flex" }}>
            <img
              style={{
                maxWidth: "40px",
                marginRight: "10px",
              }}
              src="polygon-matic-icon.svg"
              alt=""
            />
            <p style={{ color: "white", marginBottom: "0" }}>BlockProof</p>
          </div>
        </Link>
      </Typography>
      <Typography style={{ textAlign: "center", marginTop: "0" }}>
        <p style={{ color: "white" }}>
          All rights reserved by &copy; Team Parivartan {date}
        </p>
      </Typography>
    </footer>
  );
}
