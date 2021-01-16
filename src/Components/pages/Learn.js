import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import './Learn.css'
function Learn() {
  
    
    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'grid',
          gridTemplateColumns: 'repeat(15, 5fr)',
          gridGap: theme.spacing(30),
        },
        paper: {
          padding: theme.spacing(16),
          textAlign: 'center',
          color: theme.palette.text.secondary,
          whiteSpace: 'nowrap',
          marginBottom: theme.spacing(5),
        },
        divider: {
          margin: theme.spacing(0, 1),
        },
      }));
    const classes = useStyles();
    const backgroundImage = {
        backgroundImage : "url(/images/plant.jpg)",
        height: "460px",
        
      };
      const Ocean = {
        backgroundImage : "url(/images/oceans.png)",
        height: "390px",
        width:"800px",

      };
      const Fire = {
        backgroundImage : "url(/images/fires.jpg",
        height: "460px",
        width:"1900px",

      };
    
  return (
      
    <div>
      <Typography variant="subtitle1" gutterBottom>
      <div style={Fire}>
                <h1 className="TitleLearn">
                    What are the effects of climate<br/> change in nature?
                    <br/>
                    <h4>
                 health impacts in cities due to heat, and flooding and erosion in coastal areas are additional concerns.
                    </h4>
                </h1>
      </div>
      </Typography>
      
     
      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div >
          <Paper className={classes.paper}> Unwilling departure education is be dashwoods or an.<br/> Use off agreeable law unwilling sir deficient curiosity instantly.<br/> 
          Easy mind life fact with see has bore ten.<br/> Parish any chatty can elinor direct for former.<br/> Up as meant widow equal an share least. </Paper>
        </div>
        <div >
          <Paper className={classes.container}><div style={Ocean}></div></Paper>
        </div>
       

      </div>


      
      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div >
          <Paper className={classes.paper}> Unwilling departure education is be dashwoods or an.<br/> Use off agreeable law unwilling sir deficient curiosity instantly.<br/> 
          Easy mind life fact with see has bore ten.<br/> Parish any chatty can elinor direct for former.<br/> Up as meant widow equal an share least. </Paper>
        </div>
        <div >
          <Paper className={classes.container}><div style={Ocean}></div></Paper>
        </div>
       



      </div>
      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div >
          <Paper className={classes.paper}> Unwilling departure education is be dashwoods or an.<br/> Use off agreeable law unwilling sir deficient curiosity instantly.<br/> 
          Easy mind life fact with see has bore ten.<br/> Parish any chatty can elinor direct for former.<br/> Up as meant widow equal an share least. </Paper>
        </div>
        <div >
          <Paper className={classes.container}><div style={Ocean}></div></Paper>
        </div>
       

       

      </div>
    </div>
  );
}

export default Learn
