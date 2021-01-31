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
            
              <div style={backgroundImage}   >

              <h1> WHO WE ARE </h1>
              <p>Neo-Terra is a group of students who work together to fight against climate changes all over the United Kingdom. We share the news relating the climate changing, we offer you the possibility to check your carbon footprint thanks to our calculator and finally, we have a quiz that you can find on the website to test your knowledge on the subject. We aim to create a new generation of young people who are aware of the situation, educated about society and the change we need, in order to change the system we live in.​ </p>
              <h1>What we do</h1>
              </div>
                
        </Layout>
        </>
    )
}
export default About;