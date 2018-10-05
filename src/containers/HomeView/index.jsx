import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import testimg1 from './testimg1.jpg';

class HomeViewIndex extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <div className={classes.img}>
        <img className={classes.img_size} src={testimg1} />
      </div>
      <div className={classes.img}>
        <img className={classes.img_size} src={testimg1} />
      </div>
      <div className={classes.img}>
        <img className={classes.img_size} src={testimg1} />
      </div>
      </div>
    );
  }
}

HomeViewIndex.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = () => ({
  root: {
    marginTop: '100px',
    display :'flex',
    flexDirection: 'row',
  },
  img: {
    display: 'flex',
  },
  img_size:{
    maxWidth: '100%',
    height: '60vh',
    width: '100%',
  }
});

export default withStyles(styles)(HomeViewIndex);