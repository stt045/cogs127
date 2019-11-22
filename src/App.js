import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Uber from './components/Uber';
import './App.css';

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Header />
    //     <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/Uber">
    //         <Uber />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <div>
      <Uber />
    </div>
  );
}

export default App;
