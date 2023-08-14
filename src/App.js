import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import myImage from './resources/main1.jpg';
import ThreeDaysDisplay from './components/ThreeDaysDisplay';

const App = () => {
  return (
     <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route path="/home">
          <Dropdown/>
        </Route>
      </Switch>
      </BrowserRouter>
  );
};

export default App;