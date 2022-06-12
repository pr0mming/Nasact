import React from "react";
import { Route, Switch } from 'wouter';
import './style.css';
import AssetDetail from '../../pages/AssetDetail';
import Home from "../../pages/Home";
import NoMatch from "../../pages/NoMatch";
import { SearchEngineProvider } from "../../context/SearchEngineContext";

export default function App() {

  return (
    <SearchEngineProvider>
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
    </SearchEngineProvider>
  );

}
