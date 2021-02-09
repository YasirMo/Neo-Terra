import React from "react";
// import '../Styles/App.css';
import "../././Styles/Footer.css"
import { Link } from 'react-router-dom';
import   '../Components/pages/Newsletter Page/Newsletter'
import Newsletter from "../Components/pages/Newsletter Page/Newsletter";
import { Component } from "react";

class Footer extends Component {
  
  render(){
  return (
   <div> 
      
    <div className="main">
      <div className="container">
      <div className="content-wrap">
        
        <div className="row">
          <div className="col">
            <h2 className="list">
              <li>London, England</li>
              <li>Uxbridge</li>

            </h2>
          </div>
        
          <div className="col">
            
            <h5><Link to='/' className="Links-footer" >  Home </Link></h5>
            <h5><Link to ='News' className="Links-footer" >News</Link></h5>
          </div>
          
          <div className="col">
            <h5><Link to='/Learn' className="Links-footer">  Learn </Link></h5>
            <h5> <Link to='/Quiz' className="Links-footer" >  Quiz </Link></h5>
          </div>

          <div className="col">
            <h5><Link to='/TakeAction'className="Links-footer" >  Take action </Link></h5>
            <h5><Link to='/Maps'className="Links-footer" >  Maps </Link></h5>
          </div>
        
          <div className="col">
            <h5><Link to='/ContactUs' className="Links-footer" > Contact us</Link></h5>
            <h5><Link to='/About'className="Links-footer" > About us</Link></h5>
          </div>
          <hr/>
        </div>
        <Newsletter/>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;2020 Neo-Terra | All Rights Reserved |
             Terms Of Use | Cookies policy | FAQs | Instagram 
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
}
export default Footer;
