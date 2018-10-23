import React,  { Component } from 'react'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import testimg1 from '../../containers/HomeView/testimg1.jpg';
import CardData from './CardData.json';

class CardMedia extends Component {
  
    render() {
      
      const { classes } = this.props;
      const mapdata = CardData.Cards.map(function(Cards){
        return (
        <div key={Cards.id} className={classes.teaserbar}>
        <div style={{backgroundColor: Cards.overlay}} className={classes.overlay}>
        <div className={classes.textContainer}>
        <p className={classes.teaserText}>{Cards.Trainer}</p>
        <h2 className={classes.teaserTextHeading}>{Cards.Title}</h2>
          <div className={classes.dateContainer}>
            <p className={classes.teaserText}>Man & Onsdag</p>
            <p className={classes.teaserText}>16:00 - 18:00</p>
          </div>
        </div>
        <Button variant="extendedFab" aria-label="Delete" className={classes.button}>
        {Cards.btnText}
        </Button>
        </div>
        </div>
        );
      })

      return (
        <div>
           <div className={classes.root}>
         { mapdata }
      </div>
  )
        </div>
      )
    }
  }
  
const styles = theme => ({
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  root: {
    margin: '120px auto 0 auto',
    display :'flex',
    flexDirection: 'row',
    width: '1440px',
    maxHeight: '100vh',
    height: '75vh',
  },
  textContainer: {
  paddingTop: '150px',
  textAlign: 'center',
  color: 'white',
  width: '100%',
  paddingBottom: '100px',
},
teaserTextHeading: {
  textTransform:'uppercase',
  fontSize: '30px',
  margin: '0',
}, 
 teaserText: {
  padding: '4px',
  fontSize: '16px',
  margin: '0',
},
teaserbar: {
  display: 'flex',
  backgroundImage: `url('${testimg1}')`,
  backgroundPosition: 'center center',
  width: '100%',
  height: '100%',
  margin: '4px',
},
overlay: {
  height: '100%',
  width: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
},


});

export default withStyles(styles)(CardMedia);