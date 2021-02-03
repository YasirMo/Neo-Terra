import React from 'react';
import Layout from '../../Layout/Layout'
import '../../Styles/ThanksForSubscribing.css';

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
              <div class="centerText">
                <h1> THANKS FOR SUBSCRIBING </h1>
                <h1>TO OUR NEWSLETTER</h1>
              </div>
              </div>  
         </Layout>


        </>
    )
}
export default ThanksForSubscribing; 