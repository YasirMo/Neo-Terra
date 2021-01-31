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
              <p>Neo-Terra is our proposal as a team to build a web application that will address climate change, one of the UN sustainable development goals.

Our main goal is to get people to be more involved in climate change and the consequences it has in today’s society. Although it seems to be an issue that is taken into account, we still struggle to mitigate its effects.

The development of our platform will be focused on a younger audience, ranging from 15 to 25 years of age. Almost half of the global population is aged under 25 and although our target audience represents only the 16%, we believe that it is essential to educate and provide resources to a group of people who are developing their critical thinking but yet they play an important role in society.</p>
              </div>
                
        </Layout>
        </>
    )
}
export default About;