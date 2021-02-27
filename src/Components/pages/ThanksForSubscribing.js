import React from 'react';
import Layout from '../../Layout/Layout'
import '../../Styles/ThanksForSubscribing.css';
import { Link } from 'react-router-dom';

const backgroundImage = {
    backgroundImage : "url(/images/ForestPic.jpg)",
    height: "1000px",
    display: "flex",
    width :"1900px"
};

function ThanksForSubscribing () {
    return(
        <>
         <Layout>
        
         <div style={backgroundImage}>
              <div className="centerText">
                <h1> THANKS FOR SUBSCRIBING </h1>
                <h1>TO OUR NEWSLETTER</h1>
                <h1>
                <button className="continueButton"> <Link to="/Learn"> Continue To Website</Link>
                </button>
            </h1>
              </div>
              
              </div>  
         </Layout>


        </>
    )
}
export default ThanksForSubscribing; 