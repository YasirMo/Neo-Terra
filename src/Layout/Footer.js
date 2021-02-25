import React from "react";
import '../Styles/App.css';
import "../././Styles/Footer.css"
//FIX the file Footer.css
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
            <h5><Link to='/' className="Links-footer" >  Home </Link></h5>
          </div>
          
          <div className="learn">
            <h5><Link to='/Learn' className="Links-footer">  Learn </Link></h5>
          </div>

          <div className="action">
            <h5><Link to='/TakeAction'className="Links-footer" >  Take action </Link></h5>
          </div>
        
          <div className="about">
            <h5><Link to='/About'className="Links-footer" > About us</Link></h5>
          </div>

          <div className="news">
          <h5><Link to ='News' className="Links-footer" >News</Link></h5>
          </div>

          <div className="quiz">
          <h5> <Link to='/Quiz' className="Links-footer" >  Quiz </Link></h5>
          </div>

          <div className="cf">
          <h5><Link to='/CarbonFootprint'className="Links-footer" >  CF Calculator </Link></h5>
          </div>
          
        </div>
       
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;2020 Neo-Terra | All Rights Reserved |
             Terms Of Use | Cookies Policy | FAQs | <a class="ig-tag"href="https://www.instagram.com/neo_terra/">Instagram</a>
          </p>
        </div>     
        <Newsletter/>
    </div>
    </div>

  );
}
}
export default Footer;
