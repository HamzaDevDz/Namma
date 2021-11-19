import React from 'react';
import './App.css';
import {Redirect, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import {LandingPage} from "./features/landingPage/LandingPage";
import {Header} from "./features/header/Header";

function App() {
  return (
      <div className={'app'}>
          <Header />
          <Router>
              <Switch>
                  <Route exact path={'/landing'} component={LandingPage} />
                  <Redirect from={'/*'} to="/landing" status={200} />
              </Switch>
          </Router>
      </div>
  );
}

export default App;
