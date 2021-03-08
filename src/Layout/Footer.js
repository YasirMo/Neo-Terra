import React from "react";
import "../././Styles/Footer.css"
import   '../Components/pages/Newsletter Page/Newsletter'
import Newsletter from "../Components/pages/Newsletter Page/Newsletter";
import { Component } from "react";

class Footer extends Component {
  
  render(){
  return (
    <div className="main">
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col">
            <h2 className="list">
              <li>London, England</li>
              <li>Uxbridge</li>
            </h2>
          </div>

          <div className="com">  
             <h1>Neo Terra </h1>
           </div> 
          {/* Main Links */}
          <div className="footer-links">
            <div>
              <a className="link" href="/">Home</a>
            </div>
            <div>
              <a className="link" href="/Learn">Learn</a>
            </div>
            <div>
              <a className="link" href="/News">News</a>
            </div>
            <div>
              <a className="link" href="/Quiz">Quiz</a>
            </div>
            <div>
              <a className="link" href="/About">About Us</a>
            </div>
            <div>
              <a className="link" href="/CarbonFootprint">CF Calculator</a>
            </div>
          </div>
          
        </div>
        <hr />
        {/* Bottom Info / Links */}
        <div className="row">
          <p className="col-sm">
            &copy;2020 Neo-Terra | All Rights Reserved |
             Terms Of Use | Cookies Policy | FAQs | <a className="ig-tag"href="https://www.instagram.com/neo_terra/">Instagram</a>
          </p>
        </div>     
        <Newsletter/>
      </div>
    </div>
  );
}
}
export default Footer;
