import React from 'react'
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import './Learn.css'
import { cyan, lightBlue } from '@material-ui/core/colors';
function Learn() {
  
    
    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 2fr)',
          gridGap: theme.spacing(15),
        },
        paper: {
          padding: theme.spacing(16),
          textAlign: 'center',
          color: theme.palette.text.secondary,
          whiteSpace: 'nowrap',
          marginBottom: theme.spacing(5),
        },
        paper2: {
            "& > *": {
              padding: theme.spacing(2),
              margin: theme.spacing(1),
            
          }
        },
    
        factBox:{
          backgroundColor: cyan[100],
          margin: theme.spacing(1),
          width: theme.spacing(85),
          height: theme.spacing(10),
          borderRadius: 25,
          whiteSpace: 'nowrap',
          textAlign: 'center',
        },

        divider: {
          margin: theme.spacing(0, 1),
        },

      
      }));
    const classes = useStyles();
      
      const Temp = {
        backgroundImage : "url(/images/temprise.jpg)",
        height: "400px",
        width: "900px",
      }

      const Ocean = {
        backgroundImage : "url(/images/oceans.png)",
        height: "390px",
        width:"900px",

      };
      const Leaf = {
        backgroundImage : "url(/images/leafsprout.jpg",
        height: "700px",
        width:"1900px",
      };



      
      
    
  return (
      
    <div>
      <Typography variant="subtitle1" gutterBottom>
      <div style={Leaf}>
                <h1 className="TitleLearn">
                    What are the effects of climate<br/> change in nature?
                    <br/>
                    <h4 className="Subheading">
                      Climate change is a problem we are facing and it will affect the whole<br></br>planet in many ways.
                    </h4>
                    <h4 className="Subheading2">
                    We are aware that ecosystems constitute an element that humans cannot<br></br>do without, since without their resources we are unable to survive. Yet, our<br></br>actions put their existence at risk.
                    </h4>
                </h1>
      </div>
      </Typography>

      {/*Mid Section for Fact box */}
     <Divider className={classes.divider}/>
     
     <div className={classes.container}>
       <Paper className={classes.paper2}>
         <h2 className="MidSubtitle">
         In this article we will take a look at the main consequences of climate change in nature:
         </h2>
       </Paper>

       
       <Paper className={classes.factBox} elevation={10}>
         <Box p={1}>
          <Typography variant="subtitle1">
            <h1 className="Fact"><b>Fact: </b>Ecosystems perform an important role in climate regulation. Nowadays it is known that <br>
            </br>they absorb around half of CO2 emissions produced by humans
            </h1>
          </Typography>
        </Box>
       </Paper>
     </div>

     {/*1st Box*/}
      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div >
          <Paper className={classes.paper}> Unwilling departure education is be dashwoods or an.<br/> Use off agreeable law unwilling sir deficient curiosity instantly.<br/> 
          Easy mind life fact with see has bore ten.<br/> Parish any chatty can elinor direct for former.<br/> Up as meant widow equal an share least. </Paper>
        </div>
        <div >
          <Paper className={classes.container}><div style={Temp}></div></Paper>
        </div>
      </div>

      <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>

      </Typography>
      <div className={classes.container}>
        <div >
          <Paper className={classes.container}><div style={Ocean}></div></Paper>
        </div>
        <div >
          <Paper className={classes.paper}> Unwilling departure education is be dashwoods or an.<br/> Use off agreeable law unwilling sir deficient curiosity instantly.<br/> 
          Easy mind life fact with see has bore ten.<br/> Parish any chatty can elinor direct for former.<br/> Up as meant widow equal an share least. </Paper>
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
          <Paper className={classes.container}><div style={Ocean}></div></Paper>
        </div>
        <div >
          <Paper className={classes.paper}> Unwilling departure education is be dashwoods or an.<br/> Use off agreeable law unwilling sir deficient curiosity instantly.<br/> 
          Easy mind life fact with see has bore ten.<br/> Parish any chatty can elinor direct for former.<br/> Up as meant widow equal an share least. </Paper>
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
          <Paper className={classes.container}><div style={Ocean}></div></Paper>
        </div>
        <div >
          <Paper className={classes.paper}> Unwilling departure education is be dashwoods or an.<br/> Use off agreeable law unwilling sir deficient curiosity instantly.<br/> 
          Easy mind life fact with see has bore ten.<br/> Parish any chatty can elinor direct for former.<br/> Up as meant widow equal an share least. </Paper>
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
