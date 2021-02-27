import Layout from '../../../Layout/Layout'
import {CreateBox, CreateFact} from './ArticleBox';
import {ArticleBanner} from './Banner';

//This css file modifies some parts of the content.
import '../../../Styles/Blog.css'; 


/* 
Here you can write the Article's content/body.
You are most likely to use content boxes. Each box (content / topic / bullet point) should be stored as an object. 
The object should have the following properties: 

- id: String
- title: JSX (<h1> is recommended)
- txt: JSX (<p> is recommended)
- img: object or String (it should contain the path of the image)
- layout: specify the position of the content relative to the img. 
          Values can be only 'right' or 'left passed as String.

NOTE: please use the property names displayed above.
*/

const article1 = {
  title: 'What are the consequences of climate change in nature?',
  subtitle: (
    <p>
      Climate change is a problem we are facing and it will affect the whole planet in many ways.
      We are aware that ecosystems constitute an element that humans cannot do without, since 
      without their resources we are unable to survive. Yet, our actions put their existance at risk.
    </p>),
}

const Temp = {
  id: 'TempRise',
  title: <h1>Temperature Rise</h1>,
  txt: (
    <p>
      This is one of the most known consequences of climate change in the world.
      Due to global warming and our contribution with greenhouse gas emissions,
      the global temperature has been increasing faster than it should.
      This will cause extreme weather events on certain areas of the world,
      where countries will face situations like heatwaves, arid conditions as well as
      extreme precipitation. <br/>
      The increase of temperatures has been more 
      pronounced in the last decades, having between 1975 and 2007 an average 
      rate of warming of about 0.5 degrees per decade and it is expected to rise
      as much as 6 degrees by 2100.
    </p>
  ),
  img: '/images/temprise.jpg',
  layout: 'left'
}

const Polar = {
  id: 'PolarRegions',
  title: <h1>Impact in polar regions</h1>,
  txt: (
    <p>
      This is one of the most known consequences of climate change in the world.
      Due to global warming and our contribution with greenhouse gas emissions,
      the global temperature has been increasing faster than it should.
      This will cause extreme weather events on certain areas of the world,
      where countries will face situations like heatwaves, arid conditions as well as
      extreme precipitation. <br/>
      The increase of temperatures has been more 
      pronounced in the last decades, having between 1975 and 2007 an average 
      rate of warming of about 0.5 degrees per decade and it is expected to rise
      as much as 6 degrees by 2100.
    </p>
  ),
  img: '/images/polarregions.jpg',
  layout: 'right'
}

const Sea = {
  id: 'SeaLevels',
  title: <h1>Impact in polar regions</h1>,
  txt: (
    <p>
      This is one of the most known consequences of climate change in the world.
      Due to global warming and our contribution with greenhouse gas emissions,
      the global temperature has been increasing faster than it should.
      This will cause extreme weather events on certain areas of the world,
      where countries will face situations like heatwaves, arid conditions as well as
      extreme precipitation. <br/>
      The increase of temperatures has been more 
      pronounced in the last decades, having between 1975 and 2007 an average 
      rate of warming of about 0.5 degrees per decade and it is expected to rise
      as much as 6 degrees by 2100.
    </p>
  ),
  img: '/images/sealevels.jpg',
  layout: 'left'
}

const Ocean = {
  id: 'ImpactOceans',
  title: <h1>Impact in polar regions</h1>,
  txt: (
    <p>
      This is one of the most known consequences of climate change in the world.
      Due to global warming and our contribution with greenhouse gas emissions,
      the global temperature has been increasing faster than it should.
      This will cause extreme weather events on certain areas of the world,
      where countries will face situations like heatwaves, arid conditions as well as
      extreme precipitation. <br/>
      The increase of temperatures has been more 
      pronounced in the last decades, having between 1975 and 2007 an average 
      rate of warming of about 0.5 degrees per decade and it is expected to rise
      as much as 6 degrees by 2100.
    </p>
  ),
  img: '/images/oceans.jpg',
  layout: 'right'
}

const Forest = {
  id: 'ImpactForests',
  title: <h1>Impact in polar regions</h1>,
  txt: (
    <p>
      This is one of the most known consequences of climate change in the world.
      Due to global warming and our contribution with greenhouse gas emissions,
      the global temperature has been increasing faster than it should.
      This will cause extreme weather events on certain areas of the world,
      where countries will face situations like heatwaves, arid conditions as well as
      extreme precipitation. <br/>
      The increase of temperatures has been more 
      pronounced in the last decades, having between 1975 and 2007 an average 
      rate of warming of about 0.5 degrees per decade and it is expected to rise
      as much as 6 degrees by 2100.
    </p>
  ),
  img: '/images/forests.jpg',
  layout: 'left'
}

const Species = {
  id: 'EndangeredSpecies',
  title: <h1>Impact in polar regions</h1>,
  txt: (
    <p>
      This is one of the most known consequences of climate change in the world.
      Due to global warming and our contribution with greenhouse gas emissions,
      the global temperature has been increasing faster than it should.
      This will cause extreme weather events on certain areas of the world,
      where countries will face situations like heatwaves, arid conditions as well as
      extreme precipitation. <br/>
      The increase of temperatures has been more 
      pronounced in the last decades, having between 1975 and 2007 an average 
      rate of warming of about 0.5 degrees per decade and it is expected to rise
      as much as 6 degrees by 2100.
    </p>
  ),
  img: '/images/species.jpg',
  layout: 'right'
}

const Weather = {
  id: 'ExtremeWeather',
  title: <h1>Impact in polar regions</h1>,
  txt: (
    <p>
      This is one of the most known consequences of climate change in the world.
      Due to global warming and our contribution with greenhouse gas emissions,
      the global temperature has been increasing faster than it should.
      This will cause extreme weather events on certain areas of the world,
      where countries will face situations like heatwaves, arid conditions as well as
      extreme precipitation. <br/>
      The increase of temperatures has been more 
      pronounced in the last decades, having between 1975 and 2007 an average 
      rate of warming of about 0.5 degrees per decade and it is expected to rise
      as much as 6 degrees by 2100.
    </p>
  ),
  img: '/images/weather.jpg',
  layout: 'left'
}

const Fires = {
  id: 'Fires',
  title: <h1>Impact in polar regions</h1>,
  txt: (
    <p>
      This is one of the most known consequences of climate change in the world.
      Due to global warming and our contribution with greenhouse gas emissions,
      the global temperature has been increasing faster than it should.
      This will cause extreme weather events on certain areas of the world,
      where countries will face situations like heatwaves, arid conditions as well as
      extreme precipitation. <br/>
      The increase of temperatures has been more 
      pronounced in the last decades, having between 1975 and 2007 an average 
      rate of warming of about 0.5 degrees per decade and it is expected to rise
      as much as 6 degrees by 2100.
    </p>
  ),
  img: '/images/fires.jpg',
  layout: 'right'
}

const Droughts = {
  id: 'Droughts',
  title: <h1>Impact in polar regions</h1>,
  txt: (
    <p>
      This is one of the most known consequences of climate change in the world.
      Due to global warming and our contribution with greenhouse gas emissions,
      the global temperature has been increasing faster than it should.
      This will cause extreme weather events on certain areas of the world,
      where countries will face situations like heatwaves, arid conditions as well as
      extreme precipitation. <br/>
      The increase of temperatures has been more 
      pronounced in the last decades, having between 1975 and 2007 an average 
      rate of warming of about 0.5 degrees per decade and it is expected to rise
      as much as 6 degrees by 2100.
    </p>
  ),
  img: '/images/droughts.jpg',
  layout: 'left'
}

const SafeWater = {
  id: 'SafeWater',
  title: <h1>Impact in polar regions</h1>,
  txt: (
    <p>
      This is one of the most known consequences of climate change in the world.
      Due to global warming and our contribution with greenhouse gas emissions,
      the global temperature has been increasing faster than it should.
      This will cause extreme weather events on certain areas of the world,
      where countries will face situations like heatwaves, arid conditions as well as
      extreme precipitation. <br/>
      The increase of temperatures has been more 
      pronounced in the last decades, having between 1975 and 2007 an average 
      rate of warming of about 0.5 degrees per decade and it is expected to rise
      as much as 6 degrees by 2100.
    </p>
  ),
  img: '/images/safewater.jpg',
  layout: 'right'
}

const Ecosystems = {
  id: 'DestructionEcosystems',
  title: <h1>Impact in polar regions</h1>,
  txt: (
    <p>
      This is one of the most known consequences of climate change in the world.
      Due to global warming and our contribution with greenhouse gas emissions,
      the global temperature has been increasing faster than it should.
      This will cause extreme weather events on certain areas of the world,
      where countries will face situations like heatwaves, arid conditions as well as
      extreme precipitation. <br/>
      The increase of temperatures has been more 
      pronounced in the last decades, having between 1975 and 2007 an average 
      rate of warming of about 0.5 degrees per decade and it is expected to rise
      as much as 6 degrees by 2100.
    </p>
  ),
  img: '/images/Deforestation.jpg',
  layout: 'left'
}

const fact = {
  txt: 'Ecosystems perform an important role in climate regulation. Nowadays it is known that they absorb around half of CO2 emissions produced by humans'
}

/* 
Inside the main function we will pass only the required functions and arguments which will build the page content.
The functions defined already include CSS parameters.

//Instruccions on how to build an article:

- Create an instance of NavBar always!!!!
- to add an element such as page banner, box content or fact box use the imported functions from Article.js and banner.js.
  Make sure you call the function within brackets --> "{}" inside a "<div>" tag.
  Take a look at each JS to know more on their function call syntax.
- you can add paragraphs and headings for extra content such as intro and conclusion.

- Summary of functions used to make an article:
    * PageBanner --- used to add a section banner (for HOME, LEARN, QUIZ, main pages)
    * CreateFact --- used to add a short fact related to the main topic
    * CreateBox  --- used to add a bullet point with image content. Take a look at "Climate Change in nature" article for reference
*/
function Article_1() {
  return(
    <Layout>
        <div>
            {/* Page Banner */}
            {ArticleBanner(article1, '/images/leafsprout.jpg')}

            {/* Article Intro */}
            <p className="subtitle">In this article we will look at the main consequences of climate change in nature:</p>

            {/* Article fact */}
            {CreateFact(fact)}

            {/*Article body */}
            {CreateBox(Temp)}
            {CreateBox(Polar)}
            {CreateBox(Sea)}
            {CreateBox(Ocean)}
            {CreateBox(Forest)}
            {CreateBox(Species)}
            {CreateBox(Weather)}
            {CreateBox(Fires)}
            {CreateBox(Droughts)}
            {CreateBox(SafeWater)}
            {CreateBox(Ecosystems)}

            {/* Conclusion */}
            <i><h1 className="title">Conclusion</h1></i>
            <p className="subtitle">
            Climate change is a reality that must be accepted. Many species, ecosystems and natural processes are currently threatened by the drastic changes that
            have taken place in the last centuries.
            It is important to take action now in order to reduce its effects and become able to adapt in time to the new conditions that are being imposed.
            </p>
        </div>
    </Layout>
    );
}

export default Article_1;
