import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import  Home  from './Components/pages/Home';
import TakeAction from './Components/pages/TakeAction';
import Footer from './Footer';
import Learn from './Components/pages/Learn';
import News from './Components/pages/News';
import CarbonFootprint from './Components/pages/CarbonFootprint';
import Quiz from './Components/pages/Quiz';
function App() {
  return (
  <>
  <div className="App">
  <Router>
  <Navbar/>
           

    <Switch>
   
    <Route path='/' exact component={Home} />
    <Route path='/TakeAction' exact component={TakeAction} />
    <Route path='/Learn' exact component={Learn} />
    <Route path='/News' exact component={News} />
    <Route path='/CarbonFootprint' exact component={CarbonFootprint} />
    <Route path='/Quiz' exact component={Quiz} />
     
    </Switch>

           <div className="page"> 
            <div className="content">
          <Footer />
          </div>

          </div>
       </Router>
    </div> 

    </>
  );
}

export default App;