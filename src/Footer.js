import React from "react";
import './App.css';
function Footer() {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
        


          <div className="col">
            <h4>NEO-TERRA </h4>
            <h1 className="list">
              <li>London, England</li>
              <li>Uxbridge</li>
            </h1>
          </div>
        
          <div className="col">
            <h4>About us</h4>
            <div className="list">
              <li>Quiz</li>
              <li>Interactive Map</li>
              <li>Learn about climate change</li>
              <li>Take action</li>
            </div>
          </div>
        
          <div className="col">
            <h4>Contact us</h4>
            <div className="list">
              <li>FAQs</li>
              <li>Contact us</li>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;2020 Neo-Terra | All rights reserved |
            Terms Of Service | Cookie policy 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
