import React,  { Component } from 'react'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import data from './CardData.jsx';

class CardMedia extends Component {
  
    render() {
      
      const { classes } = this.props;
      console.log(data);
      const mapdata = data.Cards.map(function(Cards){
        return (
        <div key={Cards.id} style={{ backgroundImage: `url('${Cards.image}')`}} className={classes.teaserbar}>
        <div style={{backgroundColor: Cards.overlay}} className={classes.overlay}>
        <div className={classes.textContainer}>
        <p className={classes.teaserText}>{Cards.Trainer}</p>
        <h2 className={classes.teaserTextHeading}>{Cards.Title}</h2>
          
       
      <ul className={classes.dateul}>
       {Cards.mon && <li className={classes.teaserText}>{Cards.mon}</li>} 
       {Cards.weds && <li className={classes.teaserText}>{Cards.weds}</li>} 
       {Cards.fri && <li className={classes.teaserText}>{Cards.fri}</li>}
       {Cards.sat && <li className={classes.teaserText}>{Cards.sat}</li>}
       {Cards.sun && <li className={classes.teaserText}>{Cards.sun}</li>}
       </ul>

        </div>
        <Button variant="contained" color="primary" className={classes.button}>
        {Cards.btnText}
        </Button>
        </div>
        </div>
        );
      })

      return (
          <div className={classes.root}>
            { mapdata }
          </div>
      )
    }
  }
  
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    display :'flex',
    flexDirection: 'row',
    height: '100vh',
  },
  textContainer: {
  paddingTop: '300px',
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
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '100%',
},
overlay: {
  height: '100%',
  width: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
},
dateul: {
  listStyle: 'none',
    textAlign: 'center',
    padding: '0',
}


});

export default withStyles(styles)(CardMedia);