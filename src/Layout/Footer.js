import React from "react";
// import '../Styles/App.css';
import "../././Styles/Footer.css"
import { Link } from 'react-router-dom';
function Footer() {
  return (
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
            
            <h4><Link to='/' className="Links-footer" >  Home </Link></h4>
            <h4><Link to ='/' className="Links-footer" >News</Link></h4>
          </div>
          
          <div className="col">
            <h4><Link to='/Learn' className="Links-footer">  Learn </Link></h4>
            <h4> <Link to='/Quiz' className="Links-footer" >  Quiz </Link></h4>
          </div>

          <div className="col">
            <h4><Link to='/TakeAction'className="Links-footer" >  Take action </Link></h4>
            <h4><Link to='/Maps'className="Links-footer" >  Maps </Link></h4>
          </div>
        
          <div className="col">
            <h4>Contact us</h4>
            <h4><Link to='/About'className="Links-footer" > About us</Link></h4>

          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">

            &copy;2020 Neo-Terra | All rights reserved |
             Terms of use | Cookie policy | FAQs | Instagram | Contact us
            
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
