import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';

class DetailView extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        
      </div>
    )
  }
}

const styles = theme => ({
root: {
  height: '100vh',
  display: 'flex',
  flexDirection:'row',
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column"
  },
}
});

export default withStyles(styles)(DetailView);
