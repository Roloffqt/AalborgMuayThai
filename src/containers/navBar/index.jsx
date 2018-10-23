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
      <AppBar  position="static" className={classes.AppBar}>

         
          <div className={classes.img_container}>
            <img src={AMTLogoWhite} className={classes.logo} alt="logo" />
          </div>
      
      </AppBar>
    </div>
  );
};

Navbarcontainer.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  AppBar: {
  backgroundColor: 'transparent',
  boxShadow: 'none',
  },
  img_container: {
    maxWidth: "100%",
    maxHeight: "100%"
  },
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    backgroundColor: 'Transparent',
  },
  logo: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "150px",
    width: "250px"
  },

});

export default withStyles(styles)(Navbarcontainer);
