import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IPservice from '../.././../Components/pages/News Page/IPservice.js';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function SolutionCards() {
    
  const backgroundImage = {
    backgroundImage : "url(/images/BlueLand.jpg)",
    height: "100vh",
    display: "flex",
    width :"100%",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};
// background image for solutions page

    const [Answers, setAnswers] = useState([]);
    const [IP, setIP] = useState(0);

    
    useEffect(() => {
        if(IP ===0 || IP === null) {
            IPservice.getIPaddress().then((response) => {setIP(response.data.ip)})
        }
    },[IP])

    useEffect(() => {
        if(IP ===0) {
            axios.get("http://localhost:8080/users/" + IP).then((response) => {setAnswers(response.data.answers)})
        }
    }, [IP, Answers])

    const useStyles = makeStyles({
        div:{
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign:'center',
            padding: '2rem'
        },
        root: {
          maxWidth: 405,
        },
        btn:{
            padding: '10px 24px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            borderRadius: '20px',
            fontColor:'white',
            borderBottom: "none",
            '&:hover': {
                fontColor:'white',
                textDecoration: 'none',
                borderBottom: "none"


              },
             
        },
        SolutionsTitle:{
          color:'white',
          fontFamily: 'sans-serif',
        },
      });
     
      
    //This is the area where all the Solutions would be Presented
    //The code below is for when a User has answered that their household owns a car
const classes = useStyles()
    return (
        <div style={backgroundImage}>
        <div className={classes.div} >
                   {/* Card 1*/}
                 <h1 className={classes.SolutionsTitle}> Solutions</h1>  
                 {/*Here useStyles are utilized instead of a css files*/}
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/EV.jpg"
          //images
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Buy an Electic car
          </Typography>
          <Typography variant="body2" component="p">
          CO2 Emissions Prevented : {Answers[4] * 169.4} grams <br/>
          Fuel Savings: £{(0.3 * Answers[4]) * 0.12}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                <br/>

             {/* Card 2*/}
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/plant.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Compost Your Waste
          </Typography>
          <Typography variant="body2" c component="p">
          CO2 Emissions Prevented: {29500 /Answers[8]} grams
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <br/>
             {/* Card 3*/}
             <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/recycle.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Buy from Charity/ Thrift Shops
          </Typography>
          <Typography variant="body2" component="p">
          CO2 Emissions Prevented: {15000 /Answers[13]} grams
          <br/>
          Savings Made: £{Answers[13] * 210}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <br/>
    <button className={classes.btn}> <a href="/Learn" style={{color: 'black',textDecoration: 'none',}}> Continue To Website</a> </button>
</div>
</div>
    )
}

export default SolutionCards
