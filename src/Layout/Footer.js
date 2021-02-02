import React from "react";
// import '../Styles/App.css';
import "../././Styles/Footer.css"
import { Link } from 'react-router-dom';
import   '../Components/pages/Newsletter Page/Newsletter'
import Newsletter from "../Components/pages/Newsletter Page/Newsletter";
import { Component } from "react";
import Loading from '../Components/pages/Newsletter Page/loading'
import {apiUrl, notify} from  '../Components/pages/Newsletter Page/Newsindex'
import axios from 'axios';

class Footer extends Component {
  constructor(props){
    super(props);
    this.state= {
      email:'',
      loading: false
    }
  }

      handleLoadingState= loading =>{
        this.setState({loading: loading});
      }
        handelSendEmail = email =>{
           this.handleLoadingState(true);
           axios.post(`$ {apiUrl}/subscribe`, {
            email : email
           }).then(res => {
              if (res.data.success){
                  notify('sucess', 'Subscribed!', res.data.message);
                  this.setState({email: ''});
                  this.handleLoadingState(false);
              }else{
                  notify('error', 'Error. Please try again later.', res.data.error);
                  this.handleLoadingState(false);
              }
           }).catch(error => {
              notify( 'error', 'Error. please try again later', error.message);
                  this.handleLoadingState(false);
           });
        }
     handleOnChangeEmail = email =>{
       this.setState({
         email: email
       })
     }

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
        <div className="newsletter-content">
            <p className="col-xs={6}">Subscribe to our newsletter</p>
            {this.state.loading
            ?   <Loading message="Working on it..."/>
           : <Newsletter email={this.state.email} handleOnChangeEmail={this.handleOnChangeEmail} handelSendEmail={this.handelSendEmail}/>
            }
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
    </div>
  );
}
}
export default Footer;
