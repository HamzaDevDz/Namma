import React from 'react';
import './App.css';
import {Redirect, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import {LandingPage} from "./features/landingPage/LandingPage";
import {Header} from "./features/header/Header";
import {Home} from "./features/home/Home";
import NavBar from "./features/navBar/NavBar";
import DisplayDress from "./features/displayDress/DisplayDress";
import ShoppingCard from "./features/home/shoppingCard/ShoppingCard";

function App() {
  return (
      <div className={'app'}>
          <Router>
              <Header />
              <NavBar />
              <ShoppingCard />
              <Switch>
                  <Route exact path={'/landing'} component={LandingPage} />
                  <Route exact path={'/home'} component={Home} />
                  <Route exact path={'/displayDress/:idDress'} component={DisplayDress} />
                  <Redirect from={'/*'} to="/landing" status={200} />
              </Switch>
          </Router>
      </div>
  );
}

export default App;
