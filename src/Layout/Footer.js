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
            
            <h5><Link to='/' className="Links-footer" >  Home </Link></h5>
            <h5><Link to ='/' className="Links-footer" >News</Link></h5>
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
            <h5>Contact us</h5>
            <h5><Link to='/About'className="Links-footer" > About us</Link></h5>

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
