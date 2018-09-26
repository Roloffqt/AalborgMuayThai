import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AMTLogoWhite from "./AMTLogoWhite.png";

const Navbarcontainer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar
          classes={{
            root: classes.toolbar
          }}
        >
          <Typography
            variant="subheading"
            color="inherit"
            className={classes.grow}
          >
            Begynder
          </Typography>
          <Typography
            variant="subheading"
            color="inherit"
            className={classes.grow}
          >
            Advanceret
          </Typography>
          <div className={classes.img_container}>
            <img src={AMTLogoWhite} className={classes.logo} alt="logo" />
          </div>
          <Typography
            variant="subheading"
            color="inherit"
            className={classes.grow}
          >
            Børnehold
          </Typography>
          <Typography
            variant="subheading"
            color="inherit"
            className={classes.grow}
          >
            Kæmpere
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbarcontainer.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  img_container: {
    maxWidth: "100%",
    maxHeight: "100%"
  },
  root: {
    flexGrow: 1,
    maxHeight: "60px"
  },
  grow: {
    flexGrow: 1,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Kanit, sans-serif",
    letterSpacing: "2px",
    fontSize: "18px",
    transition: "0.4s",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#3f51b5",
      fontSize: "20px",
      padding: "16px",
      borderRadius: "2px"
    }
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logo: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "130px",
    width: "200px"
  },
  toolbar: {
    maxHeight: "130px",
    height: "130px"
  }
});

export default withStyles(styles)(Navbarcontainer);
