import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


const Navbarcontainer = ({ classes }) => {
  return (
    <div className={classes.root}>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="subheading" color="inherit"  className={classes.grow}>
          Home
        </Typography>
        <Typography variant="subheading" color="inherit"  className={classes.grow}>
          Begynder
        </Typography>
        <Typography variant="subheading" color="inherit"  className={classes.grow}>
          Advanceret
        </Typography>
        <Typography variant="subheading" color="inherit"  className={classes.grow}>
          Børnehold
        </Typography>
        <Typography variant="subheading" color="inherit"  className={classes.grow}>
          Kæmpere
        </Typography>
        <Typography variant="subheading" color="inherit"  className={classes.grow}>
          Crew
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
  );
};

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

export default withStyles(styles)(Navbarcontainer);
