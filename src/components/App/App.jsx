import React from "react";
import { Route, Switch } from 'wouter';
import './App.css';
import AssetDetail from '../../pages/AssetDetail';
import Home from "../../pages/Home";
import NoMatch from "../../pages/NoMatch";

export default function App() {

  return (   
    <section className="app-content">
      <section className="app-content-items">

        <Switch>
          <Route
            path="/"
            component={ Home }/>
          
          <Route
            path="/detail/:nasaId"
            component={ AssetDetail }/>

          <Route>
            <NoMatch/>
          </Route>
        </Switch>
        
      </section>
    </section>
  );

}
