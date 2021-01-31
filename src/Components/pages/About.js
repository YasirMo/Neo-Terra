import React from 'react';
import Layout from '../../Layout/Layout'

const backgroundImage = {
    backgroundImage : "url(/images/trees1.jpg)",
    height: "1000px",
    position: "fit",
    display: "flex",
  };
function About () {
    return(
        <>
            <Layout>
                <div style={backgroundImage}  ></div>
        </Layout>
        </>
    )
}
export default About;