import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import  Home  from './Components/pages/Home';
import TakeAction from './Components/pages/TakeAction';
import Footer from './Components/pages/Footer';
import Learn from './Components/pages/Learn';
import News from './Components/pages/News';
import Aboutus from './Components/pages/Aboutus';
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
    <Route path='/Aboutus' exact component={Aboutus} />
    
    </Switch>
          <Footer/>
       </Router>
</div> 
    
    </>
  );
}

export default App;
//<Footer/>