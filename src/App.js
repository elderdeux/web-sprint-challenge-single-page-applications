import React from "react";
import Header from '../src/components/header'
import CTA from './components/home'
import {Switch, Route, Link} from 'react-router-dom';
import Form from '../../web-sprint-challenge-single-page-applications/src/components/Form';

const App = () => {
  return (
    
    <Switch>

    <Route path="/">

      <Header />

      <Route path="/">

        <CTA />

      </Route>

      <Route exact path="/pizza">

        <Form />

      </Route>




    </Route> 



    </Switch>
    
  );
};
export default App;