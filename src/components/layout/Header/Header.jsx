import React, { useEffect, useRef, useState } from "react";
import './Header.css';
import SearchBar from "../../SearchBar/SearchBar";
import WAVES from 'vanta/dist/vanta.waves.min';

export default function Header({ onChangeSearch }) {

  // Define logic for add Vanta JS Background
  const [vantaEffect, setVantaEffect] = useState(0);
  const backgroundAnimated = useRef(null);

  useEffect(() => {
    
    if (!vantaEffect) {

      setVantaEffect(WAVES({
        el: backgroundAnimated.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x1d1d1e,
        shininess: 19.00
      }));

    } else {
      vantaEffect.resize();
    }
    
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }

  }, [vantaEffect]);

  return (
    <section className="header-container" ref={ backgroundAnimated }>
      <div className="header-background" />
      <div className="header-items">
        <div className="header-message-items">
          <span className="header-message-container">
            <section className="header-message-text">
                <span>
                  <strong>Developed in</strong>
                  <img className="header-app-logo" src="assets/react_logo.svg" width={ 50 } alt="React JS" />❤️
                </span>
            </section>
          </span>
          <span className="header-logo-container">
            <section className="header-logo-text">
                <span>
                  <strong>NASA Image and Video Library</strong>
                </span>
            </section>            
            <img src="assets/nasa_logo.png" alt="NASA Logo" width={ 120 } />            
          </span>
        </div>       
        <SearchBar onChangeSearch={ onChangeSearch }/>
      </div>
    </section>    
  );

}
