import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import  Home  from './Components/pages/Home';
import TakeAction from './Components/pages/TakeAction';
import Article_1 from './Components/pages/Learn Page/Article-CC_in_nature';
import News from './Components/pages/News Page/News';
import CarbonFootprint from './Components/pages/CF calculator/CarbonFootprint';
import Quiz from './Components/pages/Quiz';
import About from './Components/pages/About';
import ThanksForSubscribing from './Components/pages/ThanksForSubscribing';
import Article_2 from './Components/pages/Learn Page/Article-CC_in_society';
import Admin from './Components/pages/News Page/Admin';
import Article_3 from './Components/pages/Learn Page/Article-Ways_to_reduce'
import ScrollToTop from './Components/pages/Learn Page/ScrollToTop';

function App() {
  return (
  <Router>
    <ScrollToTop>
    
      <Route path='/' exact component={Home} />
      <Route path='/TakeAction' exact component={TakeAction} />
      <Route path='/Learn' exact component={Article_1} />
      <Route path='/LearnPageTwo' exact component={Article_2} />
      <Route path='/LearnPageThree' exact component={Article_3}/>
      <Route path='/News' exact component={News} />
      <Route path='/CarbonFootprint' exact component={CarbonFootprint} />
      <Route path='/Quiz' exact component={Quiz} />
      <Route path='/About' exact component={About} />
      <Route path='/ThanksForSubscribing' exact component={ThanksForSubscribing} />
      <Route path='/Admin' exact component={Admin} />

    </ScrollToTop>
      
  </Router>
  );
}

export default App;