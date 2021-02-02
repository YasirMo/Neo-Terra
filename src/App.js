import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import  Home  from './Components/pages/Home';
import TakeAction from './Components/pages/TakeAction';
import Learn from './Components/pages/Learn Page/Learn';
import LearnPageTwo from './Components/pages/Learn Page/LearnPageTwo';
import LearnPageThree from './Components/pages/Learn Page/LearnPageThree';
import News from './Components/pages/News Page/News';
import CarbonFootprint from './Components/pages/CF calculator/CarbonFootprint';
import Quiz from './Components/pages/Quiz';
import Maps from './Components/pages/CF calculator/Maps';
import About from './Components/pages/About';
import ThanksForSubscribing from './Components/pages/ThanksForSubscribing';
function App() {
  return (
  <>
  <Router>
  
    <Switch>
   
    </Switch>
      <Route path='/' exact component={Home} />
      <Route path='/TakeAction' exact component={TakeAction} />
      <Route path='/Learn' exact component={Learn} />
      <Route path='/LearnPageTwo' exact component={LearnPageTwo} />
      <Route path='/LearnPageThree' exact component={LearnPageThree}/>
      <Route path='/News' exact component={News} />
      <Route path='/CarbonFootprint' exact component={CarbonFootprint} />
      <Route path='/Quiz' exact component={Quiz} />
      <Route path='/Maps' exact component={Maps} />
      <Route path='/About' exact component={About} />
      <Route path='/ThanksForSubscribing' exact component={ThanksForSubscribing} />
      
     
  </Router>
       
    
   
    
    </>
  );
}

export default App;