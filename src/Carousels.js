import React from 'react'
import Carousel from "react-elastic-carousel";
import Getinvolved from './Getinvolved.js';
import Item from "./Item.js";
import MapItem from './MapItem.js';
import NewsItem from "./NewsItem.js"
const breakPoints = [
  { width: 50, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 500000, itemsToShow: 4 },
  ];
function Carousels() {
    return (

       
       
        <>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
          <Item >
          <div>
          <h1>
          Take Action
          </h1>
              <h4> 
              Take actions about what you care about
              </h4>
              <h4>
               Lets change the world together
              </h4>
           </div>

            </Item>

            <NewsItem>
            <div>
               <h1>
              News
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
            
            <Getinvolved>
            <div>
          <h1>
          Get involved
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
            </Getinvolved>

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
