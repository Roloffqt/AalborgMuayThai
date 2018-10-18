import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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
      <div className={classes.teaserbar}>
      </div>
      <div className={classes.teaserbar}>
      </div>
      <div className={classes.teaserbar}>
      </div>
      <div className={classes.teaserbar}>
      </div>
      <div className={classes.teaserbar}>
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
    margin: '100px auto',
    display :'flex',
    flexDirection: 'row',
    transform: 'rotate(2deg)',
    width: '960px',
    maxHeight: '100vh',
  },
  teaserbar: {
    display: 'flex',
    backgroundImage: `url('${testimg1}')`,
    backgroundPosition: 'center center',
    width: '100%',
    height: '75vh',
    margin: '4px',
  }
});

export default withStyles(styles)(HomeViewIndex);