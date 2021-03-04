import React from "react";
import "../././Styles/Footer.css"
import { Link } from 'react-router-dom';
import   '../Components/pages/Newsletter Page/Newsletter'
import Newsletter from "../Components/pages/Newsletter Page/Newsletter";
import { Component } from "react";

class Footer extends Component {
  
  render(){
  return (
  
      
    <div className="main">
      <div className="container">
        
        <div className="row">
          <div className="col">
            <h2 className="list">
              <li>London, England</li>
              <li>Uxbridge</li>

            </h2>
          </div>
          <div className="com">  
             <h1>Neo Terra Project</h1>
           </div> 
        
          <div className="home">           
            <h5><a href='/' className="Links-footer" >  Home </a></h5>
          </div>
          
          <div className="learn">
            <h5><a href='/Learn' className="Links-footer">  Learn </a></h5>
          </div>

          <div className="action">
            <h5><a href='/TakeAction'className="Links-footer" >  Take action </a></h5>
          </div>
        
          <div className="about">
            <h5><a href='/About'className="Links-footer" > About us</a></h5>
          </div>

          <div className="news">
          <h5><a href='News' className="Links-footer" >News</a></h5>
          </div>

          <div className="quiz">
          <h5> <a href='/Quiz' className="Links-footer" >  Quiz </a></h5>
          </div>

          <div className="cf">
          <h5><a href='/CarbonFootprint'className="Links-footer" >  CF Calculator </a></h5>
          </div>
          
        </div>
       
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;2020 Neo-Terra | All Rights Reserved |
             Terms Of Use | Cookies Policy | FAQs | <a className="ig-tag"href="https://www.instagram.com/neo__terra/">Instagram</a>
          </p>
        </div>     
        <Newsletter/>
    </div>
    </div>

  );
}
}
export default Footer;
