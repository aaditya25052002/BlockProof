import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
}));

export default function ButtonAppBar() {
  const [address, setAddress] = useState("0x");

  const classes = useStyles();
  const Link = require("react-router-dom").Link;
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="purple"
            aria-label="menu"
          >
            <i
              class="fa-sharp fa-solid fa-link"
              style={{ color: "purple", backgroundColor: "purple" }}
            >
              {" "}
            </i>
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            <Link to="/">
              <div style={{ color: "white" }}>BlockProof</div>
            </Link>
          </Typography>
          <Typography variant="h7" sytle={{ color: "white" }}>
            {address}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
