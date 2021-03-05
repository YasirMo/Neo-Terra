import React from 'react';
import '../../Styles/ThanksForSubscribing.css';

const backgroundImage = {
    backgroundImage : "url(/images/image.jpg)",
    height: "100vh",
    display: "flex",
    width :"100%",
    backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
};

function ThanksForSubscribing () {
    return(
        <>
         
        
         <div style={backgroundImage}>
             <div className="comName">
         <i>NeoTerra: <span className="subHeading">Towards a healthier world</span></i>
              <div className="centerContent">
                <h1> THANKS FOR SUBSCRIBING </h1>
                <h1>TO OUR NEWSLETTER</h1>
                <h1>
                <button className="continueButton"> <a href="/Learn"> Continue To Website</a>
                </button>
            </h1>
              </div>
              </div>
              </div>  
         


        </>
    )
}
export default ThanksForSubscribing; 