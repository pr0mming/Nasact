import React, { useState } from "react";
import './index.css';
import ListOfImageVideoLibrary from '../../components/ListOfImageVideoLibrary/ListOfImageVideoLibrary';
import Header from '../../components/layout/Header/Header';
import Footer from "../../components/layout/Footer/Footer";

export default function Home() {

  // Define logic for searchbar
  const [ listOfAssets, setListOfAssets ] = useState({
      loading: false,
      assets: []
  });

  return (   
    <section className="home-body-container">
        <div className="home-header-container">
            <Header onChangeSearch={ setListOfAssets }/>
        </div>
        <div className="home-list-results-container">
            <ListOfImageVideoLibrary props={ listOfAssets }/>
        </div>
        <div className="home-footer-results-container">
            <Footer/>
        </div>
    </section>
  );
  
}
