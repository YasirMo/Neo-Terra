import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import  Home  from './Components/pages/Home';
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
import firstSolutions from './Components/pages/Solutions/firstSolutions'
import secondSolutions from './Components/pages/Solutions/secondSolutions'

function App() {
  return (
  <Router>
    <ScrollToTop>
    
      <Route path='/' exact component={Home} />
      <Route path='/Learn' exact component={Article_1} />
      <Route path='/LearnPageTwo' exact component={Article_2} />
      <Route path='/LearnPageThree' exact component={Article_3}/>
      <Route path='/News' exact component={News} />
      <Route path='/CarbonFootprint' exact component={CarbonFootprint} />
      <Route path='/Quiz' exact component={Quiz} />
      <Route path='/About' exact component={About} />
      <Route path='/ThanksForSubscribing' exact component={ThanksForSubscribing} />
      <Route path='/Admin' exact component={Admin} />
      <Route path='/firstSolutions' exact component={firstSolutions} />
      <Route path='/secondSolutions' exact component={secondSolutions} />

    </ScrollToTop>
      
  </Router>
  );
}

export default App;