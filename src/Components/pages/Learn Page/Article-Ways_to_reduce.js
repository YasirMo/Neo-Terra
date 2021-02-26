import Layout from '../../../Layout/Layout'
import {CreateBox, CreateFact} from './ArticleBox';
import {ArticleBanner} from './Banner';

    const article3 = {
    title: 'Things you can do to help reduce the effects of climate change',
    subtitle: (
      <p>
        A new report published in September 2018, the world’s leading climate scientists made their starkest warning
        so far: our current actions are not enough for us to meet our target of 1.5C of warming. We need to do more.
      </p>),
  }

    const Meat = {
    id: 'LessMeat',
    title: <h1>Consume Less Meat And Dairy</h1>,
    txt: (
      <p>
        Industrial meat is the biggest cause of deforestation globally. Farmers deliberately cause
        forest fires to clear space for cattle ranching. New research shows that without meat and
        dairy consumption, global farmland use could be reduced by more than 75% – an area
        equivalent to the US, China, European Union and Australia combined and still feed the world.
        <br/>
        <br/>
        Things you can try:    
              <ul> 
                <li>Notice how many meals you eat with meat and cut that by 25%. Try to buy local produce
                <br></br>as this cut carbon dioxide emissions from transportation, preservation and prolonged refrigeration.</li>
                <br></br>
                <li>High fibre, plant-based diets are also better for your health.</li>
                <br></br>
                <li>Make fresh fruits and vegetables a bigger part of your diet.</li>
                <br></br>
                <li>Buy sustainable or organic fresh produce whenever possible.</li>
                <br></br>
                <li>Eat all your food and reduce waste</li>
              </ul>
      </p>
    ),
    img: '/images/breakdown.png',
    layout: 'left'
    }

    const Car = {
        id: 'CarHabits',
        title: <h1>Change Your Car Habits</h1>,
        txt: (
          <p>
            Private transport is one of the world’s biggest sources of greenhouse gases, with emissions rising every year. 
            Cars and trucks emit around 24 pounds of carbon dioxide and other gases per gallon. Particulate matter such as 
            tiny particles of soot, smoke, dust or allergens is released into the air as a result of transportation.
            <br/>
            <br/>
            Things you can try:
             
             <ul> 
               <br></br>
               <li>When possible take public transportation, bike or walk your destination.</li>
               <br></br>
               <li>When it is time to replace your vehicle consider changing to an electric or petrol smart car. You can also try car sharing schemes.</li>
               <br></br>
               <li>If you have to use your care make sure tyres are fully pumped and oxygen sensors are in good order.</li>
              </ul>
          </p>
        ),
        img: '/images/EV.jpg',
        layout: 'right'
      }

      const Flying = {
        id: 'FlyingHabits',
        title: <h1>Change Your Flying Habits</h1>,
        txt: (
          <p>
            Emissions from flights stay in the atmosphere for several centuries. This is because the emissions
            are released high into the atmosphere triggering chemical reactions and atmospheric effects
            that heat the planet.
            <br/>
            <br/>
            Things you can try:
             
              <ul> 
                <br></br>
                <li>Consider taking holidays closer to home or urge your company to set up virtual business trips </li>
                <br></br>
                <li>For trips within the same country or continent take the train.</li>
                <br></br>
                <li>When flying is unavoidable pay a little extra for carbon offsetting. <a target="_blank" rel="noreferrer" href="https://www.myclimate.org/carbon-offset/"><i>myClimate</i></a> compares carbon emissions of flights</li>
               </ul>
          </p>
        ),
        img: '/images/plane.jpg',
        layout: 'left'
      }

      const Fashion = {
        id: 'FastFashion',
        title: <h1>Stay Clear Of Fast Fashion</h1>,
        txt: (
          <p>
            The clothing sector is responsible for 3% of the world carbon dioxide emissions either in the way it is produced 
            or how it is transported.
            <br/>
            <br/>
            Things you can try:
             
             <ul> 
               <br></br>
               <li>To help combat this invest in higher quality clothing that will last.</li>
               <br></br>
               <li>You can also shop at second-hand shops or swap clothes with family and friends instead of buying new ones.</li>
               
              </ul>
          </p>
        ),
        img: '/images/recycle.jpg',
        layout: 'right'
      }

      const Impact = {
        id: 'ChangeMakesImpact',
        title: <h1>Know Your Changes Make A Real Impact</h1>,
        txt: (
          <p>
            Talk to your friends and family, and make sure your representatives are making good
            decisions. Join a social movement that focuses on environmental activities Youth
            Strike 4 Climate.
            <br/>
            <br/>
            Things you can do right now:
             
             <ul> 
               <br></br>
               <li>Power your home with renewable energy</li>
               <br></br>
               <li>Invest in energy efficient appliances </li>
               <br></br>
               <li>Reduce water waste</li>
               <br></br>
               <li>Buy LED lightbulbs</li>
               <br></br>
               <li>Unplug rarely used devices</li>
              </ul>
          </p>
        ),
        img: '/images/recycleenergy.jpg',
        layout: 'left'
      }
      const fact = {
        txt: 'The worst impacts of climate change could be irreversible by 2030'
      }

      function Article_3() {
          return (
              <Layout>
                  <div>
                  {ArticleBanner(article3, '/images/leafsprout.jpg')}
                  <p class="subtitle">In this article we will discuss the steps you should take in order to help this ever-growing battle:</p>

                  {CreateFact(fact)}
                  {CreateBox(Meat)}
                  {CreateBox(Car)}
                  {CreateBox(Flying)}
                  {CreateBox(Fashion)}
                  {CreateBox(Impact)}

                  </div>
              </Layout>
          )
      }

      export default Article_3
