import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardMedia from "../../components/ContentCard/CardMedia";
class HomeViewIndex extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CardMedia />
      </div>
    );
  }
}

HomeViewIndex.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = () => ({
  root: {}
});

export default withStyles(styles)(HomeViewIndex);
