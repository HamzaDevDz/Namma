import React from 'react';
import './App.css';
import {Redirect, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import {LandingPage} from "./features/landingPage/LandingPage";
import {Header} from "./features/header/Header";
import {Home} from "./features/home/Home";

function App() {
  return (
      <div className={'app'}>
          <Router>
              <Header />
              <Switch>
                  <Route exact path={'/landing'} component={LandingPage} />
                  <Route exact path={'/home'} component={Home} />
                  <Redirect from={'/*'} to="/landing" status={200} />
              </Switch>
          </Router>
      </div>
  );
}

export default App;
