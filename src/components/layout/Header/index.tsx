import React from "react";
import './style.css';
import SearchBar from "@/components/SearchBar";
import Particles from "react-tsparticles";
import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const particlesInit = async (_: any) => {
  await loadFull(tsParticles);
}

export default function Header() {

  return (
    <section className="header-container">
      <Particles 
        id="tsparticles" 
        className="header-background"
        url="/particle_background_config.json" 
        init={ particlesInit } />
      <div className="header-items">
        <div className="header-message-items">
          <span className="header-message-container">
            <section className="header-message-text">
                <span>
                  <strong>Developed in</strong>
                  <img className="header-app-logo" src="/react_logo.svg" width={ 50 } alt="React JS" />❤️
                </span>
            </section>
          </span>
          <span className="header-logo-container">
            <section className="header-logo-text">
                <span>
                  <strong>NASA Image and Video Library</strong>
                </span>
            </section>            
            <img src="/nasa_logo.png" alt="NASA Logo" width={ 120 } />            
          </span>
        </div>       
        <SearchBar/>
      </div>
    </section>    
  )

}
