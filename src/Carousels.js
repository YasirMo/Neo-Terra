import React from 'react'
import Carousel from "react-elastic-carousel";
import TakeActionSlider from './TakeActionSlider.js';
import Item from "./Item.js";
import MapItem from './MapItem.js';
import NewsItem from "./NewsItem.js"
import { Link } from 'react-router-dom';
import './App.css';
const breakPoints = [
  { width: 50, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  ];
function Carousels() {
    return (

       
        <>
        <div className="App">
       
          <Carousel breakPoints={breakPoints}>
         
   
 
        
            <NewsItem>
       
            <div >
            
               <h1>
               <Link to='/News' className='Carousels-Links'>  News </Link>
              </h1>
              <h4> 
              Here at Neo-Terra we believe it is time to
              </h4>
              <h4>
              share postive and insightful news 
              </h4>
              <h4>
              about cliamte change
              </h4>
             
           </div>
        
            </NewsItem>
            <Item >
          <div>
          <h1>
          <Link to='/TakeAction' className='Carousels-Links'>  Take Action </Link>

          </h1>
              <h4> 
              Take actions about what you care about
              </h4>
              <h4>
               Lets change the world together
              </h4>
           </div>

            </Item>
            
            <TakeActionSlider >
            <div >
            
          <h1>
          <Link to='/Learn' className='Carousels-Links'>  Learn </Link>

          </h1>
              <h4> 
              Society needs to be more educated 
              </h4>
              <h4>
             and involved in climate change
              </h4>
              <h4>
              find out how you can get involved
              </h4>
             
           </div>
            </TakeActionSlider>

            <MapItem>
            <div>
          <h1>
         Maps
          </h1>
              <h4> 
              Society needs to be more educated 
              </h4>
              <h4>
             and involved in climate change
              </h4>
              <h4>
              find out how you can get involved
              </h4>
           </div>
            </MapItem>


         
          
         
     
          </Carousel>
       
        </div>
       
      </>
        
    )
}

export default Carousels
